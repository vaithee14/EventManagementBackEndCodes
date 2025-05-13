const receptionModel = require("../modals/receptionModals");

const addRecption = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    // Validate required fields
    if (!title || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create and save new event
    const newEvent = new receptionModel({
      title,
      description,
      image,
    });

    await newEvent.save();

    res
      .status(201)
      .json({ message: "Receptions event added successfully", newEvent });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const GetReception = async (req, res) => {
  try {
    const events = await receptionModel.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  addRecption,
  GetReception,
};
