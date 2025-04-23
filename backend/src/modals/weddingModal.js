const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const WeddingMSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});
const WeddingModal = mongoose.model("Wedding music artist", WeddingMSchema);
module.exports = WeddingModal;
