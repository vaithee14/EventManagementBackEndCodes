const express = require("express");
const {
  UserRegistration,
  UserLogin,
} = require("../controller/UserRegController");
const router = express.Router();


// upcoming event user register
router.post("/registration", UserRegistration);
// upcoming event user Login
router.post("/login", UserLogin);

module.exports = router;
