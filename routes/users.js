const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

router.get('/', (req, res) => {
    res.json(users)
});

router.get('/:id', (req, res) => {
    const foundUser = users[req.params.id - 1]
    res.json(foundUser)
});



module.exports = router;