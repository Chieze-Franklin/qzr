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

### POST: /q

This endpoint creates a new quiz belonging to the currently signed-in user.

#### Request Header

- `authorization`: The authorization header containing the Bearer token representing the currently signed-in user.

Example:

```json
{
    "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.NjFlZjM2ZGU3OGJlYWIwYTU3NmM2OTY5.3kR3x8zxEqBjFm_LYMHVN7rGL0bF3FT4ERw4ZUh9_EA"
}
```

#### Request Body

- `title`: The title of the quiz
- `questions`: An array of questions in the quiz. Each question is an object containing:
    - `question`
    - `answer`
    - `options`: An optional array of strings from which the user may select the answer to the question

Example:

```json
{
	"title": "Quiz on Alphabets",
	"questions": [{
		"question": "What is the first letter in the English alphabet?",
		"answer": "A"
	}, {
		"question": "What is the second letter in the English alphabet?",
		"answer": "B",
		"options": ["A", "B", "C"]
	}]
}
```

#### Response Body

- `quiz`: The newly-created quiz object. Notably, this object contains a `published` field which defaults to `false`, signalling that the quiz cannot yet be accessed by other users.

Example:

```json
{
    "quiz": {
        "user_id": "61ef36de78beab0a576c6969",
        "title": "Quiz on Alphabets",
        "published": false,
        "questions": [
            {
                "question": "What is the first letter in the English alphabet?",
                "answer": "A",
                "options": [],
                "_id": "61ef542bdfb8b1a566b2b5cf"
            },
            {
                "question": "What is the second letter in the English alphabet?",
                "answer": "B",
                "options": [
                    "A",
                    "B",
                    "C"
                ],
                "_id": "61ef542bdfb8b1a566b2b5d0"
            }
        ],
        "_id": "61ef542bdfb8b1a566b2b5ce"
    }
}
```

### GET: /q

This endpoint gets published quizzes belonging to other users. To get quizzes belonging to you (including those not published), add a `mine` query to the request: `GET: /q?mine=true`.

#### Request Header

- `authorization`: The authorization header containing the Bearer token representing the currently signed-in user.

Example:

```json
{
    "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.NjFlZjM2ZGU3OGJlYWIwYTU3NmM2OTY5.3kR3x8zxEqBjFm_LYMHVN7rGL0bF3FT4ERw4ZUh9_EA"
}
```

#### Response Body

An array of quiz objects is returned here. To reduce the payload size, the `questions` field is ommitted from the returned objects.

Example:

```json
[
    {
        "_id": "61ef50ea37060ab24107b835",
        "user_id": "61ef36de78beab0a576c6969",
        "title": "A test quiz",
        "published": false
    },
    {
        "_id": "61ef542bdfb8b1a566b2b5ce",
        "user_id": "61ef36de78beab0a576c6969",
        "title": "Quiz on Alphabets",
        "published": false
    }
]
```

### PATCH: /q/:id

This endpoint updates a quiz belonging to the currently signed-in user. You can update a quiz in order to:

- Change it from unpublished to published
- Change the title of the quiz
- Add questions to the quiz
- Update questions in the quiz
- Delete questions from the quiz

#### Request Header

- `authorization`: The authorization header containing the Bearer token representing the currently signed-in user.

Example:

```json
{
    "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.NjFlZjM2ZGU3OGJlYWIwYTU3NmM2OTY5.3kR3x8zxEqBjFm_LYMHVN7rGL0bF3FT4ERw4ZUh9_EA"
}
```

#### Request Body

To publish a quiz you can set `published` to `true`. This makes the quiz available to other users.

Example:

```json
{
	"published": true
}

#### Response Body

The result of the update operation is returned so you can tell if any rows were updated.

For instance, if a user tries to update another user's quiz:

```json
{
    "result": {
        "acknowledged": true,
        "modifiedCount": 0, // notice how this is zero
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 0 // notice how this is zero
    }
}
```

If a user tries to update another their own quiz:

```json
{
    "result": {
        "acknowledged": true,
        "modifiedCount": 1, // notice how this is not zero
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1 // notice how this is not zero
    }
}
```

