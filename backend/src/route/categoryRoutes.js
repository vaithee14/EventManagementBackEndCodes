const express = require("express");
const { createCategory, getCategories, deleteCategory } = require("../controller/categoryController");

const router = express.Router();

router.post("/add/categories", createCategory);  
router.get("/get/categories", getCategories);    
router.delete("/delete/categories/:id", deleteCategory);  

module.exports = router;
