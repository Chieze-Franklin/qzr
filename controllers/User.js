const UserModel = require("../models/User");
const { jwt, security } = require("../utils");

const signIn = async (req, res, next) => {
    try {
        // TODO: validate req.body
        const user = await UserModel.findOne({
            username: req.body.username,
            passwordHash: security.hash(req.body.password.trim()).toString(),
        })
        .exec();
        if (!user) {
            throw new Error("invalid credentials");
        }
        const token = jwt.encrypt(user._id.toString());
        res.json({ user, token });
    } catch(err) {
        next(err);
    }
};

const signUp = async (req, res, next) => {
    try {
        // TODO: validate req.body
        // TODO: ensure username is unique
        const user = new UserModel({
            username: req.body.username,
            passwordHash: security.hash(req.body.password.trim()).toString(),
        });
        await user.save();
        const token = jwt.encrypt(user._id.toString());
        res.json({ user, token });
    } catch(err) {
        next(err);
    }
};

module.exports = {
    signIn,
    signUp,
};
