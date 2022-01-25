const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.use((err, req, res, next) => {
    res.status(500).json({
        error: {
            message: err.message,
            stack: err.stack.split("\n").map(s => s.trim()),
        }
    })
});

module.exports = app;
