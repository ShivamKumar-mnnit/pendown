const express = require('express');
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');


//Route1 : get all the notes using : GET "/api/notes/fetchallnotes"  login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})


//Route2 : add a new note using : POST "/api/notes/addnote"  login required
router.post('/addnote', fetchuser, [

    body('title', 'Enter a valid Title').isLength({ min: 2 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),

], async (req, res) => {

    try {
        const { title, description, tag } = req.body;
        //if there are error return bad request and errrors
        const errors =  validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save()

        res.json({ savedNote });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }

})

//Route3 : Update and existing note using : POST "/api/notes/updatenote"  login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        //create a new note object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //find the note to be updated and update it 
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }

})


//Route4 : Delete an existing note using : DELETE "/api/notes/deletenote"  login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        //find the note to be deleted and delete it 
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        //allow deletion only user owns this Note
        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") }


        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router