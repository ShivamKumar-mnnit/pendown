const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

//encryption
const JWT_SECRET = process.env.JWT_SECRET;

//1.creating an user using : POST '/api/auth'  auth doesnot requires
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min: 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a strong password(atleast 8 character)').isLength({min: 8}),
], async(req,res)=>{
    let success = false;
    //if there are error return bad request and errrors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }

    try{
    //check whether user exist 
    let user = await User.findOne({email: req.body.email});
if(user){
    return res.status(400).json({error : 'Sorry a user with this email exist '})
}

const salt = await bcrypt.genSalt(process.env.SALT);
secPass= await bcrypt.hash(req.body.password,salt);

//create a new user
    user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass,
    })

    const data = {
        user:{
            id:user.id
        }
    }
    
    //to encrypt
    const authtoken = jwt.sign(data,JWT_SECRET);
    success = true;
    res.json({success,authtoken});

    }catch(error){
        console.error(error.message);
        res.status(500) .send("Internal Server Error")
    }
    })



//Route2:
//2nd end point // authenticate user using POST "/api/auth/login"
router.post('/login', [
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
], async(req,res)=>{
    let success = false;
//if there are error return bad request and errrors
const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
}

const {email,password} = req.body;
try{
    let user = await User.findOne({email});
    if(!user){
        success=false;
        return res.status(400).json({ error: "Try to login with correct credetials"});
    }
    
    const passwordCompare =await bcrypt.compare(password,user.password);
    if(!passwordCompare){
        success=false;
        return res.status(400).json({ success,error: "Try to login with correct credetials"});
    }

    const data = {
        user:{
            id: user.id
        }
    }
    //to encrypt
    const authtoken = jwt.sign(data,JWT_SECRET);
    //    res.json({user});
    success=true;
    res.json({success,authtoken});


}catch(error){
    console.log(error.message);
    res.status(500) .send("Internal Server Error")
}


})



//Route3:
//3rd end point // get user details using POST "/api/auth/getuser" , login required
router.post('/getuser',fetchuser, async(req,res)=>{
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');   
        res.send(user); 
    }catch(error){
        res.status(500) .send("Internal Server Error")
    }
    })



module.exports = router