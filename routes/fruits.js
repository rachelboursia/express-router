const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.get('/', (req, res) => {
    res.json(fruits)
});

router.get('/:id', (req, res) => {
    const foundFruits = users[req.params.id - 1]
    res.json(foundFruits)
});


module.exports = router;