const express = require('express');
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Profile = require('../models/Profile');
const { body, validationResult } = require('express-validator');


//Route1 : get profile using : GET "/api/profiles/fetchprofile"  login required
router.get('/fetchprofile', fetchuser, async (req, res) => {
    try {
        const profiles = await Profile.find({ user: req.user.id })
        res.json(profiles);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

//Route1.2 : get all the profiles  using : GET "/api/events/displayallprofiles"  login required
router.get('/displayallprofiles', fetchuser, async (req, res) => {
    try {
        const profiles = await Profile.find()
        res.json(profiles);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})


//Route2 : add a new profile using : POST "/api/profiles/addprofile"  login required
router.post('/addprofile', fetchuser, [

    body('name', 'Enter your name').isLength({ min: 1 }),
    body('branch', 'Enter your branch').isLength({ min: 1 }),
    body('regno', 'Enter your registration number').isLength({ min: 8 }),
    body('year', 'Enter your passing year').isLength({ min: 1 }),
    body('email', 'Enter your email').isEmail(),
    body('mobile', 'Enter your mobile').isLength({ min: 10 }),
    body('tag', 'Enter your tag'),
    body('bio', 'Enter your bio'),
    body('resume', 'Enter the link of your resume'),
    body('github', 'Enter the link of your github'),
    body('linkedin', 'Enter the link of your linkedin'),
    body('link1', 'Enter the link1'),
    body('link2', 'Enter the link2'),
    body('project1', 'Enter the link of project1'),
    body('project2', 'Enter the link of project2'),
], async (req, res) => {

    try {
        const { name, branch, regno,year,email,mobile,tag,bio,resume,github,linkedin,link1,link2,project1,project2 } = req.body;
        //if there are error return bad request and errrors
        const errors =  validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const profile = new Profile({
            name,branch, regno,year,email,mobile,tag,bio,resume,github,linkedin,link1,link2,project1,project2, user: req.user.id
        })

        const savedProfile = await profile.save()

        res.json({ savedProfile });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }

})

//Route3 : Update and existing profile using : POST "/api/notes/updateprofile"  login required
router.put('/updateprofile/:id', fetchuser, async (req, res) => {
    const { name, branch, regno,year,email,mobile,tag,bio,resume,github,linkedin,link1,link2,project1,project2 } = req.body;
    try {
        //create a new note object
        const newProfile = {};
        if (name) { newProfile.name = name };
        if (branch) { newProfile.branch = branch };
        if (regno) { newProfile.regno = regno };
        if (year) { newProfile.year = year };
        if (email) { newProfile.email = email };
        if (mobile) { newProfile.mobile = mobile };
        if (tag) { newProfile.tag = tag };
        if (bio) { newProfile.bio = bio };
        if (resume) { newProfile.resume = resume };
        if (github) { newProfile.github = github };
        if (linkedin) { newProfile.linkedin = linkedin };
        if (link1) { newProfile.link1 = link1 };
        if (link2) { newProfile.link2 = link2 };
        if (project1) { newProfile.project1 = project1 };
        if (project2) { newProfile.project2 = project2 };

        //find the note to be updated and update it 
        let profile = await Profile.findById(req.params.id);
        if (!profile) { return res.status(404).send("Not Found") }

        if (profile.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") }

        profile = await Profile.findByIdAndUpdate(req.params.id, { $set: newProfile }, { new: true })
        res.json({ profile });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }

})


//Route4 : Delete an existing profile using : DELETE "/api/profiles/deleteprofile"  login required
router.delete('/deleteprofile/:id', fetchuser, async (req, res) => {
    try {
        //find the profile to be deleted and delete it 
        let profile = await Profile.findById(req.params.id);
        if (!profile) { return res.status(404).send("Not Found") }

        //allow deletion only user owns this Profile
        if (profile.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") }


        profile = await Profile.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Profile has been deleted", profile: profile });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

// Route5: Like a profile using PUT "/api/profiles/like/:id" (login required)
router.put('/like/:id', fetchuser, async (req, res) => {
    try {
      const profile = await Profile.findById(req.params.id);
  
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
  
      if (profile.likes.some(like => like.user.toString() === req.user.id)) {
        return res.status(400).json({ message: 'Profile already liked' });
      }
      if (profile && profile.likes) {
        profile.likes.unshift({ user: req.user.id });
      }
  
      await profile.save();
  
      res.json(profile.likes);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Route6: Unlike a profile using PUT "/api/profiles/unlike/:id" (login required)
router.put('/unlike/:id', fetchuser, async (req, res) => {
    try {
      const profile = await Profile.findById(req.params.id);
  
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
  
      if (!profile.likes.some(like => like.user.toString() === req.user.id)) {
        return res.status(400).json({ message: 'Profile not liked' });
      }
  
      profile.likes = profile.likes.filter(
        like => like.user.toString() !== req.user.id
      );
  
      await profile.save();
  
      res.json(profile.likes);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
  




module.exports = router