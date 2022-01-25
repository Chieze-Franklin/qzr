const mongoose = require("mongoose");

const schema = mongoose.Schema({
	username: String,
    passwordHash: String,
});

schema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.passwordHash;
    delete obj.__v;
    return obj;
}

module.exports = mongoose.model("User", schema);
