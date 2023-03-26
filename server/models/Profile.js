const mongoose = require('mongoose');
const {Schema} = mongoose;
 
//schema
const ProfileSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{
        type: String,
        required: true
    },
    branch:{
        type :  String,
        required: true,
    },
    
    regno:{
        type: String,
        required:true,
    },
    year:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    mobile:{
        type: String,
    },
    tag:{
        type: String,
        default : "student"
    },
    bio:{
        type: String,
    },
    resume:{
        type: String,
    },
    github:{
        type: String,
    },
    linkedin:{
        type: String,
    },
    link1:{
        type: String,
    },
    link2:{
        type: String,
    },
    
    project1:{
        type: String,
    },
    project2:{
        type: String,
    },
    likes: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
          },
          timestamp: {
            type: Date,
            default: Date.now
          }
        }
      ],
    date:{
        type: Date,
        default : Date.now
    }
});

module.exports = mongoose.model('profiles',ProfileSchema);