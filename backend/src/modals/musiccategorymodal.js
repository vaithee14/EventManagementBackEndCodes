const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const musicCategorySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  location: {
    type: String,
  },
  date: {
    type: String,
  },

  time: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
});

const MusicModel = mongoose.model("MusicEvent", musicCategorySchema);
module.exports = MusicModel;
