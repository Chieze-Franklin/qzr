const express = require("express");
const quizRoutes = require("./Quiz");
const userRoutes = require("./User");

const routes = express.Router();

routes.use(userRoutes);
routes.use(quizRoutes);

module.exports = routes;
