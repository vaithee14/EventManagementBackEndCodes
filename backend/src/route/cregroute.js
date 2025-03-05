// pcategory payment category registration 
const express = require("express");
const {registerUser, getUserRegister, deleteUserRegister,updateUserregister} = require("../controller/cregcontroller");

const router = express.Router();

//post
router.post("/add/register", registerUser);
// get
router.get("/get/user-registers", getUserRegister);
// delete
router.delete("/delete/user/:id", deleteUserRegister);
// update api
router.put("/update/user/:id",updateUserregister)

module.exports = router;
