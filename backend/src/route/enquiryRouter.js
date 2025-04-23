const express = require("express");
const { EnquiryController } = require("../controller/enquiryController");
const router = express.Router();
router.post("/enquiry/api", EnquiryController);
module.exports = router;
