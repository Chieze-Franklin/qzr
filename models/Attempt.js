const mongoose = require("mongoose");

const schema = mongoose.Schema({
    user_id: mongoose.Schema.ObjectId,
    quiz_id: mongoose.Schema.ObjectId,
	title: String,
    date: { type: Date, default: Date.now },
    score: Number,
    questions: [{
        question: String,
        answer: String,
        attemptedAnswer: String,
        attempted: Boolean,
        correct: Boolean,
    }],
})

schema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.__v;
    return obj;
}

module.exports = mongoose.model("Attempt", schema);
