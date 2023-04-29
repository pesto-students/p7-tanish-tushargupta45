const express = require("express");
const router = express.Router();
const userController = require("../controller/user.js");

router.post("/signup", userController.createUser);
router.post("/login", userController.login);
router.delete("/:userId", userController.deleteUser);

module.exports = router;
