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
        .find({},{id: req.id})
        .catch(err => render.json(err))
})

module.exports = router;