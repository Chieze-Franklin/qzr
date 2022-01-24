const QuizModel = require("../models/Quiz");

const create = async (req, res) => {
    const quiz = new QuizModel({
        title: "A test quiz",
    });
    await quiz.save();
    res.json({ quiz });
};

const findMany = async (req, res) => {
    const quizzes = await QuizModel.find();
    res.json(quizzes);
};

module.exports = {
    create,
    findMany,
};
