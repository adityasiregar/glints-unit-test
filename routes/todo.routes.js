const express = require("express");
const todoController = require("../controllers/todo.controller");
const router = express.Router();
const {verifyAdmin, verify} = require('../middleware/auth');

router.post("/", verifyAdmin, todoController.createTodo);
router.get("/", verify, todoController.getTodos);
router.get("/:todoId", verify, todoController.getTodoById);
router.put("/:todoId", verifyAdmin, todoController.updateTodo);
router.delete("/:todoId", verifyAdmin, todoController.deleteTodo);

module.exports = router;
