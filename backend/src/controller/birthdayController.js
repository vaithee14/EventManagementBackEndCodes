const BirthdayModel = require("../modals/bithdayModel");

const addBirthdayEvent = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    if (!title || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newbirthdayEvent = new BirthdayModel({
      title,
      description,
      image,
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

module.exports = { addBirthdayEvent, getbirthdayEvents };
