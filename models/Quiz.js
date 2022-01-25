const mongoose = require("mongoose");

const schema = mongoose.Schema({
    user_id: mongoose.Schema.ObjectId,
	title: String,
    questions: [{
        question: String,
        answer: String,
        options: [String],
    }],
})

module.exports = mongoose.model("Quiz", schema);
