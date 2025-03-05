const express = require("express");
const { getEvents, bookTicket } = require("../controller/userConroller");

const router = express.Router();

router.get("/events", getEvents);
router.post("/book-ticket", bookTicket);

module.exports = router;
