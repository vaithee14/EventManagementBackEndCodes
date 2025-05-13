const express = require("express");

const {
  addRecption,
  GetReception,
} = require("../controller/receptionController");

const router = express.Router();

router.post("/addEvents", addRecption);
router.get("/getEvents", GetReception);

module.exports = router;
