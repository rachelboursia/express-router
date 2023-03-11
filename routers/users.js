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

router.post('/', [check("name").not().isEmpty().trim()], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({error: errors.array()});
    } else {
        const {name, age} = req.body;
        const newUser = {name, age};
        users.push(newUser);
        res.json(users);
    }
});

router.put('/:id', (req, res) => {
    const id = req.params.id - 1;
    users[id].name = req.body.name;
    users[id].age = req.body.age;
    res.json(users);
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    users.splice(id - 1, 1);
    res.send("User deleted")
});

module.exports = router;