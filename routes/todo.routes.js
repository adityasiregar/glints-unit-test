const express = require("express");
const todoController = require("../controllers/todo.controller");
const router = express.Router();
const {verifyAdmin} = require('../middleware/auth');

router.post("/", todoController.createTodo);
router.get("/", verifyAdmin, todoController.getTodos);
router.get("/:todoId", todoController.getTodoById);
router.put("/:todoId", todoController.updateTodo);
router.delete("/:todoId", todoController.deleteTodo);

module.exports = router;
