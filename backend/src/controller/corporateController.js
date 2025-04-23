const conporateModel = require("../modals/corporateModels");

const getCorporateEvents = async (req, res) => {
  try {
    const events = await conporateModel.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// POST corporate Event (Add New Event)
const addCorporateEvent = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    const newEvent = new conporateModel({
      title,
      description,
      image,
    });

    // Save it to the database
    await newEvent.save();

    res
      .status(201)
      .json({ message: "Corporate event added successfully", newEvent });
  } catch (error) {
    console.error("Error adding corporate event:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = {
  getCorporateEvents,
  addCorporateEvent,
};
