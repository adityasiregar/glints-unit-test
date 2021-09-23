const express = require("express");
const controller = require("../controllers/hello.controller");
const router = express.Router();

router.get("/hello", controller.hello);

module.exports = router;
