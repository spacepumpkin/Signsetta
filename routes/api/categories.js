const express = require('express');
const router = express.Router();
const Category = require("../../models/Category");

router.get("/test", (req, res) => res.json({ msg: "This is the categories route" }));


router.get('/', (req, res) => {
    Category.find()
        .sort({ name: 1 })
        .then(categories => res.json(categories))
        .catch(err => res.status(404).json({ nocategoriesfound: 'no categories found' }));
});

router.get('/:id', (req, res) => {
    Category.findById(req.params.id)
        .then(category => res.json(category))
        .catch(err =>
            res.status(404).json({ nocategoryfound: 'No category found with that ID' })
        );
});

module.exports = router;