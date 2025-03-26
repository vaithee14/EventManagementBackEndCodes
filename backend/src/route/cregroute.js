const express = require("express");
const { registerUser, userlogin } = require("../controller/cregcontroller");

const router = express.Router();

router.post("/add/register", registerUser);
router.post("/login", userlogin);

module.exports = router;
