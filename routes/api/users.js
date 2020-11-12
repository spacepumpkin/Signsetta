const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const passport = require('passport');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
    });
})

router.get("/all", (req, res) => {
    User.find()
        .then(users => {
            const payload = {};
            users.forEach(user => {
                payload[user.id] = user;
            });
            res.json(payload);
        })
        .catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err =>
            res.status(404).json({ nouserfound: 'No user found with that ID' })
        );
});

// router.get('/:user_id', (req, res) => {
//     User.findOne({ email: req.body.email })
//         .then(user => {
//             if (user) {
//                 return res.json( {
//                    username: user.username,
//                    cards: user.cards
//                 } )
//             } else {
//                 return res.status(404).json({err: "No user found"})
//             }
//         })
// });

// api/user/:user_id/cards
router.get('/:id/cards', (req, res) => {
    User.findOne({_id: req.params.id})
        .then(user =>  {
            res.json( user.cards )
        })
        // .then(email = res.json(email))
        .catch(err => res.status(404).json({ nocardsfound: 'No cards found for that user' }))

})

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: "A user has already registered with this email" })
            } else {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                })

                // newUser.save().then( user => res.send(user)).catch(err => res.send(err)); unsafe!
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then((user) => res.json(user))
                            .catch(err => console.log(err))
                    });
                });
            }
        });
});


router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: "This user does not exist " });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            username: user.username,
                            email: user.email
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        )
                    } else {
                        return res.status(400).json({ password: "Password was incorrect" })
                    }
                });
        });
});

const upload = require("../../services/ImageUpload.js");
const singleUpload = upload.single("image");

router.post("/:id/add-profile-picture", function (req, res) {
    const uid = req.params.id;

    singleUpload(req, res, function (err) {
        if (err) {
            return res.json({
                success: false,
                errors: {
                    title: "Image Upload Error",
                    detail: err.message,
                    error: err,
                },
            });
        }

        let update = { profilePicture: req.file.location };

        User.findByIdAndUpdate(uid, update, { new: true })
            .then((user) => res.status(200).json({ success: true, user: user }))
            .catch((err) => res.status(400).json({ success: false, error: err }));
    });
});

// Post user's cards
router.post("/:id/cards", function (req, res) {
    const uid = req.params.id;

    User.findOne({_id: uid}, function(err, doc){
        let cardIds = JSON.parse(req.body.cards); 
        cardIds.forEach(id => {
            if(!doc.cards.includes(id)){
                doc.cards.push(id);
            }
        })
           doc.save();  
           

           
    }).then((user) => res.json(user.cards))
        .catch((err) => res.status(400).json({ success: false, error: err }));
    
      

});

// Delete user's cards
router.delete("/:id/cards", function (req, res) {
    const uid = req.params.id;
    User.findOne({ _id: uid }, function (err, doc) {
        console.log(req.body);
        let cardIds = JSON.parse(req.body.cards);
        console.log(cardIds);
        cardIds.forEach(id => {
            while (doc.cards.includes(id)) {
                doc.cards.splice(doc.cards.indexOf(id), 1)
                console.log(doc.cards);
            }
        })
        doc.save();

    }).then((user) => res.json(user.cards))
        .catch((err) => res.status(400).json({ success: false, error: err }));
});

module.exports = router;