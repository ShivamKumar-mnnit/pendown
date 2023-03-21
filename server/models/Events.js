const mongoose = require('mongoose');
const {Schema} = mongoose;
 
//schema
const EventsSchema = new Schema({
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
        required: true,
    },
    
    organizer:{
        type :  String,
        required: true,
    },
    datetobeheld:{
        type: String,
        default : "General"
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

module.exports = mongoose.model('events',EventsSchema);