const AttemptModel = require("../../../models/Attempt");
const QuizModel = require("../../../models/Quiz");

const attempts = [{
    user_id: "61ef362757482f142fb3825b",
    quiz_id: "61ef542bdfb8b1a566b2b5ce",
    title: "Quiz on Alphabets",
    score: 50,
    questions: [
        {
            question: "What is the first letter in the English alphabet?",
            answer: "A",
            attemptedAnswer: "A",
            attempted: true,
            correct: true,
            _id: "61efe9b0afbf8eb52ee0341f"
        },
        {
            question: "What is the second letter in the English alphabet?",
            answer: "B",
            attemptedAnswer: "A",
            attempted: true,
            correct: false,
            _id: "61efe9b0afbf8eb52ee03420"
        }
    ],
    _id: "61efe9b0afbf8eb52ee0341e",
    date: "2022-01-25T12:14:40.784Z"
}, {
    user_id: "61ef362757482f142fb3825b",
    quiz_id: "61ef542bdfb8b1a566b2b5ce",
    title: "Quiz on Alphabets",
    score: 100,
    questions: [
        {
            question: "What is the first letter in the English alphabet?",
            answer: "A",
            attemptedAnswer: "A",
            attempted: true,
            correct: true,
            _id: "61efe9b0afbf8eb52ee03412"
        },
        {
            question: "What is the second letter in the English alphabet?",
            answer: "B",
            attemptedAnswer: "B",
            attempted: true,
            correct: true,
            _id: "61efe9b0afbf8eb52ee03421"
        }
    ],
    _id: "61efe9b0afbf8eb52ee0341f",
    date: "2022-01-26T12:14:40.784Z"
}];

const quiz = {
    _id: "61ef542bdfb8b1a566b2b5ce",
    title: "Quiz on Alphabets",
    published: true,
    user_id: "61ef36de78beab0a576c6969",
    questions: [{
        _id: "61ef542bdfb8b1a566b2b5cf",
        question: "What is the first letter in the English alphabet?",
        answer: "A"
    }, {
        _id: "61ef542bdfb8b1a566b2b5d0",
        question: "What is the second letter in the English alphabet?",
        answer: "B",
        options: ["A", "B", "C"]
    }],
};

AttemptModel.find = jest.fn().mockResolvedValue(attempts);

QuizModel.findById = jest.fn().mockResolvedValue(quiz);

module.exports = {
    AttemptModel,
    QuizModel,
};
