const express = require("express");
const attemptController = require("../controllers/Attempt");

const router  = express.Router();

router.get("/a/:id?", attemptController.find);
router.post("/a/:id", attemptController.create);

module.exports = router;
