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

router.post('/', [check('color').not().isEmpty().trim()], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({error: errors.array()});
    } else {
        const {name, color} = req.body;
        const newUser = {name, color};
        fruits.push(newFruit);
        res.json(fruits);
    }
});

router.put('/:id', (req, res) => {
    const id = req.params.id - 1;
    fruits[id].name = req.body.name;
    fruits[id].color = req.body.color;
    res.json(fruits);
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    fruits.splice(id - 1, 1);
    res.send("Fruit deleted")
});

module.exports = router;