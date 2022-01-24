const express = require("express");
const quizRoutes = require("./Quiz");

const routes = express.Router();

routes.use(quizRoutes);

module.exports = routes;
