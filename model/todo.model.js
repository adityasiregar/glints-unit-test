const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true
  },
  user_id: {
    type: Number
  }
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
