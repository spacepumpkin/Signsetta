const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Card = require('../../models/Card');
// const passport = require('passport');
// const validateTweetInput = require('../../validation/tweets');

// router.get('/', (req, res) => {
//     Tweet.find()
//         .sort({ date: -1 })
//         .then(tweets => res.json(tweets))
//         .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
// });

router.get('/user/:user_id', (req, res) => {
    Card.find({ user: req.params.user_id })
        .then(cards => res.json(cards))
        .catch(err =>
            res.status(404).json({ nocardsfound: 'No cards found for that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Card.findById(req.params.id)
        .then(card => res.json(card))
        .catch(err =>
            res.status(404).json({ notcardfound: 'No card found with that ID' })
        );
});

// router.post('/',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         const { errors, isValid } = validateTweetInput(req.body);

//         if (!isValid) {
//             return res.status(400).json(errors);
//         }

//         const newTweet = new Tweet({
//             text: req.body.text,
//             user: req.user.id
//         });

//         newTweet.save().then(tweet => res.json(tweet));
//     }
// );

module.exports = router;