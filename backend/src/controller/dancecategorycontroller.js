const DanceEvent = require("../modals/daningcategorymodals");

const getdanceEvents = async (req, res) => {
  try {
    const events = await DanceEvent.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// POST Music Event (Add New Event)
const addDnaceEvent = async (req, res) => {
  try {
    const { title, description, image, location, date, time } = req.body;

    // Validate required fields
    if (!title || !description || !image || !location || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEvent = new DanceEvent({
      title,
      description,
      image,
      location,
      date,
      time,
    });

    await newEvent.save();
    res
      .status(201)
      .json({ message: "Music event added successfully", newEvent });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = { getdanceEvents, addDnaceEvent };
