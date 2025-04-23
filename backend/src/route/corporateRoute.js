const express = require("express");
const {
  addCorporateEvent,
  getCorporateEvents,
} = require("../controller/corporateController");

const router = express.Router();

router.post("/add/corporate", addCorporateEvent);

router.get("/get/corporate", getCorporateEvents);

module.exports = router;
