const express = require("express");
const { addServices,getService } = require("../controller/serviceController");
const router = express.Router();

router.post("/add/services", addServices);
router.get("/get/Services",getService)
module.exports = router;
