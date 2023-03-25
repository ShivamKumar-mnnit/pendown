const mongoose = require('mongoose');
const {Schema} = mongoose;
 
//schema
const MaterialsSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type :  String,
    },
    link:{
        type :  String,
        required: true,
    },
    date:{
        type: Date,
        default : Date.now
    }
});

module.exports = mongoose.model('materials',MaterialsSchema);