const express = require("express");
const controller = require("../controllers/student.controller");
const router = express.Router();

router.post("/score", controller.studentScore);

module.exports = router;
