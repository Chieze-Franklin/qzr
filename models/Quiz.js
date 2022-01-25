const mongoose = require("mongoose");

const schema = mongoose.Schema({
    user_id: mongoose.Schema.ObjectId,
	title: String,
    published: { type: Boolean, default: false },
    questions: [{
        question: String,
        answer: String,
        options: [String],
    }],
});

schema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.__v;
    return obj;
}

module.exports = mongoose.model("Quiz", schema);
