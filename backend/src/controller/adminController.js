const Event = require("../modals/eventModal");
const Ticket = require("../modals/ticketModal");

// Add an event
const addEvent = async (req, res) => {
  try {
    const { title, description, date, location, image } = req.body;

    if (!title || !description || !date || !location || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEvent = new Event(req.body);
    await newEvent.save();

    res.status(201).json({ success: true, message: "Event added successfully", event: newEvent });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding event", error: error.message });
  }
};

// Update an event
const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedEvent) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    res.status(200).json({ success: true, message: "Event updated successfully", event: updatedEvent });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating event", error: error.message });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    res.status(200).json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting event", error: error.message });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Ticket.find().populate("eventId");

    if (!bookings.length) {
      return res.status(404).json({ success: false, message: "No bookings found" });
    }

    res.status(200).json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching bookings", error: error.message });
  }
};

module.exports = {
  addEvent,
  updateEvent,
  deleteEvent,
  getAllBookings,
};
