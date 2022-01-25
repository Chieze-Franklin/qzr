const QuizModel = require("../models/Quiz");

const create = async (req, res, next) => {
    try {
        // TODO: validate req.body
        const quiz = new QuizModel({
            user_id: req.user._id,
            title: req.body.title,
            questions: req.body.questions,
        });
        await quiz.save();
        res.json({ quiz });
    } catch(err) {
        next(err);
    }
};

const find = async (req, res, next) => {
    try {
        // TODO: validate req.query

        let quizzes = [];

        if (req.query.mine) {
            quizzes = await QuizModel.find({ user_id: req.user._id }).select("-questions");
        } else {
            quizzes = await QuizModel.find({ user_id: { $ne: req.user._id }, published: true }).select("-questions");
        }

        res.json(quizzes);
    } catch(err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        // TODO: validate req.params and req.body

        // TODO: add, update, delete questions

        const reqBodyWithoutQuestions = { ...req.body };
        delete reqBodyWithoutQuestions.questions;
        const result = await QuizModel.updateOne({ _id: req.params.id, user_id: req.user._id }, reqBodyWithoutQuestions);

        res.json({ result });
    } catch(err) {
        next(err);
    }
};

module.exports = {
    create,
    find,
    update,
};
