const { jwt } = require("../utils");
const UserModel = require("../models/User");

const authenticateUser = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(403).json({
                error: {
                    message: "no authorization header sent",
                }
            });
        }
    
        const authorization = req.headers.authorization;
        if (!authorization.startsWith("Bearer ") || !authorization.substr(7)) {
            return res.status(403).json({
                error: {
                    message: "invalid authorization header sent",
                }
            });
        }
    
        const token = authorization.substr(7);
        const id = jwt.decrypt(token);
        const user = await UserModel.findById(id).exec();
        if (!user) {
            return res.status(403).json({
                error: {
                    message: "invalid authorization header sent",
                }
            });
        }
    
        req.user = user;
        next();
    } catch(err) {
        next(err);
    }
};

module.exports = {
    authenticateUser,
};
