const express = require("express");

const {
  getdanceEvents,
  addDnaceEvent,
} = require("../controller/dancecategorycontroller");

const router = express.Router();

router.get("/getDance", getdanceEvents);
router.post("/addDance", addDnaceEvent);

module.exports = router;
