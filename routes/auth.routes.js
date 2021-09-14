const express = require("express");
const controller = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signin", controller.signin);
router.post("/signup", controller.signup);

module.exports = router;
