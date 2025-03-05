const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const categorySchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Category", categorySchema);
