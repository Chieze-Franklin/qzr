const express = require("express");
const authMiddleware = require("../middlewares/Auth");
const attemptRoutes = require("./Attempt");
const quizRoutes = require("./Quiz");
const userRoutes = require("./User");
const statsRoutes = require("./Stats");

const routes = express.Router();

routes.use(userRoutes);
routes.use(authMiddleware.authenticateUser);
routes.use(attemptRoutes);
routes.use(quizRoutes);
routes.use(statsRoutes);

module.exports = routes;
