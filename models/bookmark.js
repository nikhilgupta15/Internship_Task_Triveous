const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
  link:{
    type: String,
    required: true,
  },
  title:{
    type: String,
    required: true,
  },
  timeCreated:{
    type: Number,
    required: true,
  },
  publisher:{
    type: String,
    required: true,
  },
  timeUpdated:{
    type: Date,
    default: Date.now,
  },
  tags:{
    type: [String],
  }

});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);
module.exports = Bookmark;
