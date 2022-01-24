const express = require("express");
const quizController = require("../controllers/Quiz");

const router  = express.Router();

router.get("/q", quizController.findMany);
router.post("/q", quizController.create);

module.exports = router;
