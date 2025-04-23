const express = require("express");

const {
  getmusicEvents,
  addMusicEvent,
  // getmusicEventsById,
} = require("../controller/musiccatorycontroller");

const router = express.Router();

router.get("/getMusic", getmusicEvents);

router.post("/addMusic", addMusicEvent);


module.exports = router;
