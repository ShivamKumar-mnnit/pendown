const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')
connectToMongo();

const app = express();
const port = 8001;


app.use(cors());
app.use(express.json())

//Available Routes
app.use('/api/auth',require('./routes/auth'))


app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.listen(port, ()=>{
    console.log(`Server is runninng on port ${port}`);

})


