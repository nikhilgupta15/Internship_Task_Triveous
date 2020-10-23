const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  title:{
    type: String,
    required: true,
  },
  timeCreated:{
    type: Number,
    required: true,
  },
  timeUpdated:{
    type: Date,
    default: Date.now,
  }
});

const Tags = mongoose.model("Tags", tagSchema);
module.exports = Tags;
