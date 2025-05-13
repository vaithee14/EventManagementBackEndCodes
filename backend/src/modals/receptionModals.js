const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const ReceptionSchema = new mongoose.Schema({
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
    required: true,
  },
});
const receptionModel = mongoose.model("ReceptionEvents", ReceptionSchema);
module.exports = receptionModel;
