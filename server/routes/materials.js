const express = require('express');
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Material = require('../models/Materials');
const { body, validationResult } = require('express-validator');


//Route1.1 : get all the materials of one user using : GET "/api/materials/fetchallmaterials"  login required
router.get('/fetchallmaterials', fetchuser, async (req, res) => {
    try {
        const materials = await Material.find({ user: req.user.id })
        res.json(materials);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})


//Route1.2 : get all the materials  using : GET "/api/materials/displayallmaterials"  login required
router.get('/displayallmaterials', fetchuser, async (req, res) => {
    try {
        const materials = await Material.find()
        res.json(materials);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})


//Route2 : add a new material using : POST "/api/materials/addmaterial"  login required
router.post('/addmaterial', fetchuser, [

    body('title', 'Enter a valid title').isLength({ min: 1 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('link', 'Enter the link of event').isLength({ min: 1 }),

], async (req, res) => {

    try {
        const { title, description,link } = req.body;
        //if there are error return bad request and errrors
        const errors =  validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const material = new Material({
            title, description, link, user: req.user.id
        })

        const savedMaterial = await material.save()

        res.json({ savedMaterial });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }

})

//Route3 : Update and existing material using : POST "/api/materials/updatematerial"  login required
router.put('/updatematerial/:id', fetchuser, async (req, res) => {
    const { title, description, link } = req.body;
    try {
        //create a new material object
        const newMaterial = {};
        if (title) { newMaterial.title = title };
        if (description) { newMaterial.description = description };
        if (link) { newMaterial.link = link };

        //find the material to be updated and update it 
        let material = await Material.findById(req.params.id);
        if (!material) { return res.status(404).send("Not Found") }

        if (material.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") }

       material = await Material.findByIdAndUpdate(req.params.id, { $set: newMaterial }, { new: true })
        res.json({ material });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }

})


//Route4 : Delete an existing material using : DELETE "/api/materials/deletematerial"  login required
router.delete('/deletematerial/:id', fetchuser, async (req, res) => {
    try {
        //find the material to be deleted and delete it 
        let material = await Material.findById(req.params.id);
        if (!material) { return res.status(404).send("Not Found") }

        //allow deletion only user owns this Material
        if (material.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") }


        material = await Material.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Material has been deleted", material: material });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router