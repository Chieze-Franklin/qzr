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

## Running Tests

Run `npm test`

## API

### POST: /signup

This endpoint creates a new user in the database and returns an authentication token that represents the user. The returned token should be included in the header of requests to help authenticate the requests.

#### Request Body

- `username`: The user's unique username
- `password`: The user's password

Example:

```json
{
	"username": "user",
	"password": "password"
}
```

#### Response Body

- `user`: The newly-created user object
- `token`: An auth token representing the user. This token expres after a while, and the user must then sign in to get a new token.

Example:

```json
{
    "user": {
        "username": "user",
        "_id": "61ef36de78beab0a576c6969",
    },
    "token": "eyJhbGciOiJIUzI1NiJ9.NjFlZjM2ZGU3OGJlYWIwYTU3NmM2OTY5.3kR3x8zxEqBjFm_LYMHVN7rGL0bF3FT4ERw4ZUh9_EA"
}
```

### POST: /signin

This endpoint signs in an existing user and returns an authentication token that represents the user. The returned token should be included in the header of requests to help authenticate the requests.

#### Request Body

- `username`: The user's unique username
- `password`: The user's password

Example:

```json
{
	"username": "user",
	"password": "password"
}
```

#### Response Body

- `user`: The signed-in user object
- `token`: An auth token representing the user. This token expres after a while, and the user must then sign in to get a new token.

Example:

```json
{
    "user": {
        "_id": "61ef36de78beab0a576c6969",
        "username": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiJ9.NjFlZjM2ZGU3OGJlYWIwYTU3NmM2OTY5.3kR3x8zxEqBjFm_LYMHVN7rGL0bF3FT4ERw4ZUh9_EA"
}
```
