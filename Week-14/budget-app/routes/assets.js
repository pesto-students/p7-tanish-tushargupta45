const express = require("express");
const assetsController = require("../controller/assets");
const isAuth = require("../middleware/is-auth");
const router = express.Router();

router.get("", isAuth, assetsController.getAssets);
router.post("", isAuth, assetsController.addAssets);

module.exports = router;
