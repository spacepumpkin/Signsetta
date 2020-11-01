const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Card = require('../../models/Card');

router.get('/', (req, res) => {
    Card.find()
        .sort({ category: -1})
        .then(cards => res.json(cards))
        .catch(err => res.status(404).json({nocardsfound: 'no cards found'}));
});

router.get('/:id', (req, res) => {
    Card.findById(req.params.id)
        .then(card => res.json(card))
        .catch(err =>
            res.status(404).json({ nocardfound: 'No card found with that ID' })
        );
});

router.get('/category/:catid', (req, res) => {
    Card.find({category_id: req.params.category})
        .then(cards => 
            res.json(cards))
        .catch(err => {
            res.status(404).json({ nocardsfound: 'no cards found in this category'})
        })
})

// router.get("/category/test", (req, res) => res.json({ msg: "This is the category cards route" }));

module.exports = router;