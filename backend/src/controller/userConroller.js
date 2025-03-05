const Event = require("../modals/eventModal");
const Ticket = require("../modals/ticketModal");

// Fetch all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({ success: true, events });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching events", error: error.message });
  }
};

// Book a ticket
const bookTicket = async (req, res) => {
  try {
    const { eventId, userName, email, phone } = req.body;

    if (!eventId || !userName || !email || !phone) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const ticket = new Ticket({ eventId, userName, email, phone });
    await ticket.save();

    res.status(201).json({ success: true, message: "Ticket booked successfully", ticket });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error booking ticket", error: error.message });
  }
};

module.exports = {
  getEvents,
  bookTicket,
};
