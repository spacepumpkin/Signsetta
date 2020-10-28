const express = require("express");
const Category = require("../../models/Category");
const router = express.Router();

router.get('/', (res, req) => {
    Category
        .find({})
        .sort({name: 1})
        .catch(err => render.json(err))
})  

router.get('/:id', (res, req) => {
    Category
        .find({},{id: req.params.id})
        .then(category => res.json({cards: category.cards}))
        .catch(err => render.json(err))
})


module.exports = router;