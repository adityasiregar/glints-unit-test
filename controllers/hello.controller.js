const TodoModel = require("../model/todo.model");

exports.hello = async (req, res, next) => {
  try {
    res.status(201).json({
      "message": "Hello World"
    });
  } catch (err) {
    next(err);
  }
};

