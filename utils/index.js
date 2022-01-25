require("dotenv").config();
const jsonwebtoken = require('jsonwebtoken');

const jwt = {
    decrypt: (token, options) => {
      return jsonwebtoken.verify(token, process.env.JWT_SECRET || "jwt_secret", options);
    },
    encrypt: (payload, options) => {
      return jsonwebtoken.sign(payload, process.env.JWT_SECRET || "jwt_secret", options);
    },
};

const security = {
    hash: (text) => {
        var hash = 0;
        for (var i = 0; i < text.length; i++) {
            var char = text.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    },
}

module.exports = {
    jwt,
    security,
};
