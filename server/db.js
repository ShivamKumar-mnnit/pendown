const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://mickey:shopzohack36@shopzo.s0cahed.mongodb.net/shopzo";

mongoose.set('strictQuery', false);

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log(`Connected to database succesfully on cluster shopzo`);
    });
}

module.exports = connectToMongo;