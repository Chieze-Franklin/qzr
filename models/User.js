const mongoose = require("mongoose");

const schema = mongoose.Schema({
	username: String,
    passwordHash: String,
})

module.exports = mongoose.model("User", schema);
