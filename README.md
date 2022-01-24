# QZR API

The [QZR API](https://qzrapi.herokuapp.com/) is a small API for a quiz app where users can create and attempt quizzes. Users can also see some basic stats about their quiz attempts.

## Running Online

The root domain for this API is located at [https://qzrapi.herokuapp.com/](https://qzrapi.herokuapp.com/).

## Running Locally

- Clone the QZR repository from [https://github.com/Chieze-Franklin/qzr.git](https://github.com/Chieze-Franklin/qzr.git)
- Navigate to the repository's root directory
- Install all dependencies by running `npm i`
- Create a `.env` file in the root directory containing values for
    - `DB_URL`: The MongoDB connection URL
    - `PORT`: The port for the API server
- Run `npm start`
- You can now test the API using a tool like [PostMan](https://www.postman.com/downloads/)
