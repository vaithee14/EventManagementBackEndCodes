const express = require("express");

const {
  addEvent,
  updateEvent,
  deleteEvent,
  getAllBookings,
} = require("../controller/adminController");


const router = express.Router();

router.post("/add-event", addEvent);
router.put("/update-event/:id", updateEvent);
router.delete("/delete-event/:id", deleteEvent);
router.get("/bookings", getAllBookings);

module.exports = router;
