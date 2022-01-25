const express = require("express");
const statsController = require("../controllers/Stats");

const router  = express.Router();

router.get("/stats/:id?", statsController.find);

module.exports = router;
