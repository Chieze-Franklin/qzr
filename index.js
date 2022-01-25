require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

mongoose
	.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, })
	.then(() => {
        console.log("Connected to database!");

		app.listen(process.env.PORT, () => {
			console.log("Server has started!")
		})
	})
    .catch((e) => console.log(e))