const express = require("express");
const {
  addBirthdayEvent,
  getbirthdayEvents,
} = require("../controller/birthdayController");

const router = express.Router();

router.post("/add/birthday", addBirthdayEvent);

router.get("/get/birthday", getbirthdayEvents);


module.exports = router;
