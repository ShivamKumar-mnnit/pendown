const express = require('express');
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Event = require('../models/Events');
const { body, validationResult } = require('express-validator');


//Route1.1 : get all the events of one user using : GET "/api/events/fetchallevents"  login required
router.get('/fetchallevents', fetchuser, async (req, res) => {
    try {
        const events = await Event.find({ user: req.user.id })
        res.json(events);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})


//Route1.2 : get all the events  using : GET "/api/events/displayallevents"  login required
router.get('/displayallevents', fetchuser, async (req, res) => {
    try {
        const events = await Event.find()
        res.json(events);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})


//Route2 : add a new event using : POST "/api/events/addevent"  login required
router.post('/addevent', fetchuser, [

    body('title', 'Enter a valid title').isLength({ min: 1 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('organizer', 'Enter the name of organizer'),
    body('datetobeheld', 'Enter date of event'),
    body('link', 'Enter the link of event').isLength({ min: 1 }),

], async (req, res) => {

    try {
        const { title, description, organizer, datetobeheld,link } = req.body;
        //if there are error return bad request and errrors
        const errors =  validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const event = new Event({
            title, description, organizer,datetobeheld,link, user: req.user.id
        })

        const savedEvent = await event.save()

        res.json({ savedEvent });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }

})

//Route3 : Update and existing event using : POST "/api/events/updateevent"  login required
router.put('/updateevent/:id', fetchuser, async (req, res) => {
    const { title, description, organizer, datetobeheld,link } = req.body;
    try {
        //create a new note object
        const newEvent = {};
        if (title) { newEvent.title = title };
        if (description) { newEvent.description = description };
        if (organizer) { newEvent.organizer = organizer };
        if (datetobeheld) { newEvent.datetobeheld = datetobeheld };
        if (link) { newEvent.link = link };

        //find the event to be updated and update it 
        let event = await Event.findById(req.params.id);
        if (!event) { return res.status(404).send("Not Found") }

        if (event.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") }

        event = await Event.findByIdAndUpdate(req.params.id, { $set: newEvent }, { new: true })
        res.json({ event });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }

})


//Route4 : Delete an existing event using : DELETE "/api/events/deleteevent"  login required
router.delete('/deleteevent/:id', fetchuser, async (req, res) => {
    try {
        //find the event to be deleted and delete it 
        let event = await Event.findById(req.params.id);
        if (!event) { return res.status(404).send("Not Found") }

        //allow deletion only user owns this Event
        if (event.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") }


        event = await Event.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Event has been deleted", event: event });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router