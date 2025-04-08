const express = require("express");
const {
  addBirthdayEvent,
  getbirthdayEvents,
  getbirthdayEventsById,
} = require("../controller/birthdayController");

const router = express.Router();

router.post("/add/birthday", addBirthdayEvent);

router.get("/get/birthday", getbirthdayEvents);

router.get("/getById/:id", getbirthdayEventsById);

module.exports = router;
