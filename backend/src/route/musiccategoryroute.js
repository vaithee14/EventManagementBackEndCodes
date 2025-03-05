const express = require("express");

const {
  getmusicEvents,
  addMusicEvent,
  getMusicEventById,
} = require("../controller/musiccatorycontroller");

const router = express.Router();

router.get("/getMusic", getmusicEvents);

router.post("/addMusic", addMusicEvent);
// ticket section
router.get("/getMusic/:eventId", getMusicEventById);
module.exports = router;
