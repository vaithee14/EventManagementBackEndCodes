const DanceModal = require("../modals/daningcategorymodals");
// get
const getdanceEvents = async (req, res) => {
  try {
    const events = await DanceModal.find();
    res.json(events);
  } catch (Error) {
    res.status(500).json({ message: "Server Error" });
  }
};
// dance
const addDnaceEvent = async (req, res) => {
  try {
    const { title, description, image, location, date, time } = req.body;

    // Validate required fields
    if (!title || !description || !image || !location || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEvent = new DanceModal({
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
      .json({ message: "Dance event added successfully", DanceModal });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const getdanceEventsbyId = async (req, res) => {
  const danceEventId = req.params.id;

  try {
    const getdanceevents = await DanceModal.findOne({ _id: danceEventId });
    res.json(getdanceevents);
  } catch (error) {
    res.status(500).json({ message: "Dance Id is Not Valid" });
  }
};
module.exports = {
  getdanceEvents,
  addDnaceEvent,
  getdanceEventsbyId,
};
