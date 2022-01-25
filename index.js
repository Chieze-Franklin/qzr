require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
	.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, })
	.then(() => {
        console.log("Connected to database!");

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

		app.listen(process.env.PORT, () => {
			console.log("Server has started!")
		})
	})
    .catch((e) => console.log(e))