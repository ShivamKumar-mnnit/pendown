const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    f_name:{
        type: String,
        required: true
    },
    l_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },    
    address:{
        type: String,
        required: true
    },
    city:{
        type:String,
        require: true
    },
    state:{
        type: String,
        required: true
    },
    zip:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }

});
const User = mongoose.model('user',UserSchema);



module.exports = mongoose.model('user',UserSchema);