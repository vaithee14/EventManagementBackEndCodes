const UpcoimgEventModal = require("../modals/upcoimgEventModel");

// Get all upcoming events
const getUpcomingEvents = async (req, res) => {
  try {
    const events = await UpcoimgEventModal.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Add new upcoming event
const addUpcomingevents = async (req, res) => {
  try {
    const { title, description, image, location, date } = req.body;

    if (!title || !description || !image || !location || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const upcomeEvent = new UpcoimgEventModal({
      title,
      description,
      image,
      location,
      date,
    });

    await upcomeEvent.save();
    res.status(201).json({ message: "Event added successfully", upcomeEvent });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

module.exports = {
  getUpcomingEvents,
  addUpcomingevents,
};
