const TodoModel = require("../model/todo.model");

exports.hello = async (req, res, next) => {
  try {
    const username = req.body.username
    let result = ''
    if(username === 'rayhan') {
      result = `Chai menerima rayhan`
    } else {
      result = `Chai menolak ${username}, Chai hanya menerima cinta rayhan`
    }

    res.status(201).json({
      "message": result
    });
  } catch (err) {
    next(err);
  }
};

