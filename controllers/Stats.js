const AttemptModel = require("../models/Attempt");

const find = async (req, res, next) => {
    try {
        // TODO: validate req.params

        let attempts = [];

        if (req.params.id) {
            attempts = await AttemptModel.find({ user_id: req.user._id, quiz_id: req.params.id });
        } else {
            attempts = await AttemptModel.find({ user_id: req.user._id });
        }

        // TODO: replace these with an aggregate query

        const allQuestions = attempts.flatMap(a => a.questions);
        const correctQuestions = allQuestions.filter(q => q.correct);
        const attemptedQuestions = allQuestions.filter(q => q.attempted);

        res.json({
            stats: {
                attemptsCount: attempts.length,
                questionsCount: allQuestions.length,
                correctQuestionsCount: correctQuestions.length,
                attemptedQuestionsCount: attemptedQuestions.length,
                score: (correctQuestions.length / allQuestions.length) * 100,
                scores: attempts.map(a => a.score),
            },
        });
    } catch(err) {
        next(err);
    }
};

module.exports = {
    find,
};
