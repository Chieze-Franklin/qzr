const express = require("express");
const quizController = require("../controllers/Quiz");

const router  = express.Router();

router.get("/q", quizController.find);
router.post("/q", quizController.create);
router.patch("/q/:id", quizController.update);

module.exports = router;
