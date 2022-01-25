const express = require("express");
const authMiddleware = require("../middlewares/Auth");
const quizRoutes = require("./Quiz");
const userRoutes = require("./User");

const routes = express.Router();

routes.use(userRoutes);
routes.use(authMiddleware.authenticateUser);
routes.use(quizRoutes);

module.exports = routes;
