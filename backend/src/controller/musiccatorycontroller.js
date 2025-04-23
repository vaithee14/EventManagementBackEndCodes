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
    const { title, description, image } = req.body;

    // Validate required fields
    if (!title || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    res
      .status(201)
      .json({ message: "Music event added successfully", newEvent });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// const getmusicEventsById = async (req, res) => {

//   try {
//     const getmusicevents = await musicModal.findOne({ _id: musicEventId });
//     res.json(getmusicevents);
//   } catch (error) {
//     res.status(500).json({ message: "Music Id is not Valid" });
//   }
// };

module.exports = { getmusicEvents, addMusicEvent };
