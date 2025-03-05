const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const danceCategorySchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

const DanceEvent = mongoose.model("DanceEvent", danceCategorySchema);
module.exports = DanceEvent;
