const connectToMongo = require('./db');
const express = require('express');
const app = express();
const port = 8001;

app.get('/' ,(req,res)=>{
    res.send("Hello world");
})

app.listen(port, ()=>{
    console.log(`Server is runninng on port ${port}`);
    connectToMongo();
})


