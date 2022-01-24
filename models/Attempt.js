const mongoose = require("mongoose");

const schema = mongoose.Schema({
    // user_id
    // quiz_id
	title: String,
    date: { type: Date, default: Date.now },
    questions: [{
        question: String,
        answer: String,
        options: [String],
    }],
})

module.exports = mongoose.model("Attempt", schema);
