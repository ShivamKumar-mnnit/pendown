const mongoose = require('mongoose');
const DATABASE = process.env.DATABASE;
const mongoURI = `${DATABASE}`;

mongoose.set('strictQuery', false);

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log(`Connected to database succesfully`);
    });
}

module.exports = connectToMongo;