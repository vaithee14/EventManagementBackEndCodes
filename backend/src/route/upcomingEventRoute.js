const express = require("express");
const {
  getUpcomingEvents,
  addUpcomingevents,
} = require("../controller/upcomingEventControllar");

const router = express.Router();
// upcoming event get api
router.get("/get/upcomingevents", getUpcomingEvents);
// upcoming event post api
router.post("/add/upcomingevents", addUpcomingevents);

module.exports = router;
