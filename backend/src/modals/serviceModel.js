const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const serviceSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },

  servicesName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Services", serviceSchema);
