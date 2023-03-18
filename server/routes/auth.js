const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body, validationResult} = require('express-validator');


//creating an user using : POST '/api/auth'  auth doesnot requires
router.post('/',[
    body('f_name','Enter a valid first name').isLength({min: 3}),
    body('l_name','Enter a valid last name').isLength({min: 1}),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a strong password(atleast 8 character)').isLength({min: 8}),
    body('address','Enter your address').isLength({min: 1}),
    body('city','Enter your city').isLength({min: 1}),
    body('state','Enter your state').isLength({min: 1}),
    body('zip','Enter zip code').isLength({min: 6}),
], async(req,res)=>{
    //if there are error return bad request and errrors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }

    User.create({
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        password:req.body.password,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
    }).then(user => res.json(user));
   
    })


module.exports = router