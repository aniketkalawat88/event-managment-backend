const Event = require("../models/Event");

const createEvent = async (req, res) => {
    const { title, location, date } = req.body;
    try {
        const event = new Event({ title, location, date });
        await event.save();
        res.status(201).json({message : "event created succesfully" , value: event});
    } catch (error) {
        res.status(400).json({ message: "Error Creating Event" , error: error.message });
    }
}

const deleteEvent = async (req, res) => {
    try {
        const data = await Event.findByIdAndDelete(req.params.id);
        if(!data){
            return res.status(400).json({ message : "Event Already Deleted" });
        }
        res.status(200).json({ message: 'Event deleted Succesfully' , value:data });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const allEvent = async (req , res) => {
    try {
        const data = await Event.find({});
        res.status(200).json({ message: 'All Events List' , value: data });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { createEvent , deleteEvent , allEvent}