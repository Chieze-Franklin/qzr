const AttemptModel = require("../models/Attempt");
const QuizModel = require("../models/Quiz");

const create = async (req, res, next) => {
    try {
        // TODO: validate req.body

        // find the quiz being attempted
        const quiz = await QuizModel.findById(req.params.id).exec();
        // you can only attempt other users' published quizzes
        if (!quiz || !quiz.published || req.user._id.toString() === quiz.user_id.toString()) {
            throw new Error("no published quiz found with specified quiz ID");
        }

        // compare attempted questions with quiz questions
        const attemptedQuestions = req.body.questions.reverse(); // in case a question is attempted more than once, we use the last one
        const questions = quiz.questions.map(q => {
            const attemptedAnswer = attemptedQuestions.find(aq => aq.id === q._id.toString())?.answer;
            const attemptedQ = {
                question: q.question,
                answer: q.answer,
                attemptedAnswer,
                attempted: !!(attemptedAnswer),
                correct: (attemptedAnswer && attemptedAnswer.trim().toLowerCase() === q.answer.trim().toLowerCase()),
            };

            return attemptedQ;
        });

        const correctQuestions = questions.filter(q => q.correct);
        const attempt = new AttemptModel({
            user_id: req.user._id,
            quiz_id: quiz._id,
            title: quiz.title,
            score: (correctQuestions.length / questions.length) * 100,
            questions,
        });
        await attempt.save();

        res.json({ attempt });
    } catch(err) {
        next(err);
    }
};

const find = async (req, res, next) => {
    try {
        // TODO: validate req.query

        let quizzes = [];

        if (req.query.mine) {
            quizzes = await AttemptModel.find({ user_id: req.user._id }).select("-questions");
        } else {
            quizzes = await AttemptModel.find({ user_id: { $ne: req.user._id }, published: true }).select("-questions");
        }

        res.json(quizzes);
    } catch(err) {
        next(err);
    }
};

module.exports = {
    create,
    find,
};
