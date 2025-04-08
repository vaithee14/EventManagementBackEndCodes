const BirthdayModel = require("../modals/bithdayModel");

const addBirthdayEvent = async (req, res) => {
  try {
    const { title, description, image, location, date, time, images } =
      req.body;

    if (!title || !description || !image || !location || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newbirthdayEvent = new BirthdayModel({
      title,
      description,
      image,
      location,
      date,
      time,
      images,
    });

    await newbirthdayEvent.save();
    res.status(201).json({
      message: "Birthday event added successfully",
      newbirthdayEvent,
    });
  } catch (error) {
    console.error("Error adding birthday event:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// get method
const getbirthdayEvents = async (req, res) => {
  try {
    const events = await BirthdayModel.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
// getparticular birthday event card
const getbirthdayEventsById = async (req, res) => {
  const birthddayId = req.params.id;

  try {
    const getbithdayevents = await BirthdayModel.findOne({ _id: birthddayId });
    if (!getbithdayevents) {
      return res.status(404).json({ message: "Birthday event not found" });
    }
    res.json(getbithdayevents);
  } catch (error) {
    console.error("Error fetching birthday event by ID:", error);
    res.status(500).json({ message: "Birthday ID is not valid" });
  }
};

module.exports = { addBirthdayEvent, getbirthdayEvents, getbirthdayEventsById };
