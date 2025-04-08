const express = require("express");
const { addEmailRegistration } = require("../controller/emailcontroller");

const router = express.Router();

router.post("/user/email", addEmailRegistration);
module.exports = router;
