const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema ({
    frontside: {
        type: String,
        required: true
    },
    backside: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    }
});

const Card = mongoose.model('card', CardSchema);
module.exports = Card;

