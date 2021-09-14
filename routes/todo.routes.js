const express = require("express");
const todoController = require("../controllers/todo.controller");
const router = express.Router();
const jwt = require('jsonwebtoken');

var privateKey = "helloworld123";

const auth = async (req, res, next) => {
    const token = req.headers["auth"]    
    jwt.verify(token, privateKey, (err, decoded)=> {

        if(err) {
            return res.status(401).send({
                err: err
            })
        }
        next();
    });
}

router.post("/", todoController.createTodo);
router.get("/",  auth, todoController.getTodos);
router.get("/:todoId", todoController.getTodoById);
router.put("/:todoId", todoController.updateTodo);
router.delete("/:todoId", todoController.deleteTodo);

module.exports = router;
