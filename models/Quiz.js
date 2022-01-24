const mongoose = require("mongoose");

const schema = mongoose.Schema({
    user_id: mongoose.Types.ObjectId,
	title: String,
    questions: [{
        question: String,
        answer: String,
        options: [String],
    }],
})

module.exports = mongoose.model("Quiz", schema);
