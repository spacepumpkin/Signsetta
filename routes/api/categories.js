const express = require("express");
const bcrypt = require("bcryptjs");
const Category = require("../../models/Category");
const router = express.Router();

router.get('/', (res, req) => {
    Category
        .find()
        .sort()
})  

router.get('/:id', (res, req) => {
    Category
        .find({id: req.id})
})