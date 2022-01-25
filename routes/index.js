const express = require("express");
const authMiddleware = require("../middlewares/Auth");
const attemptRoutes = require("./Attempt");
const quizRoutes = require("./Quiz");
const userRoutes = require("./User");

const routes = express.Router();

routes.use(userRoutes);
routes.use(authMiddleware.authenticateUser);
routes.use(attemptRoutes);
routes.use(quizRoutes);

module.exports = routes;
