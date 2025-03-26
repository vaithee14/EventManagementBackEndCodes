const express = require("express");

const {
  getdanceEvents,
  addDnaceEvent,
  getdanceEventsbyId,
} = require("../controller/danceconroller");

const router = express.Router();

router.get("/getDance", getdanceEvents);
router.post("/addDance", addDnaceEvent);
router.get("/getbyId/:id",getdanceEventsbyId)

module.exports = router;
