const musicModal = require("../modals/musiccategorymodal");

const getmusicEvents = async (req, res) => {
  try {
    const events = await musicModal.find(); 
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// POST Music Event (Add New Event)
const addMusicEvent = async (req, res) => {
    try {
      const { title, description, image, location, date, time } = req.body;
  
      // Validate required fields
      if (!title || !description || !image || !location || !date || !time) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const newEvent = new musicModal({
        title,
        description,
        image,
        location,
        date,
        time,
      });
  
      await newEvent.save();
      res.status(201).json({ message: "Music event added successfully", newEvent });
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  };

  // ticket section
  const getMusicEventById = async (req, res) => {
    try {
      const { eventId } = req.params; 
      const event = await musicModal.findById(eventId);
  
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
  
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  };
  

module.exports = { getmusicEvents,addMusicEvent,getMusicEventById };
