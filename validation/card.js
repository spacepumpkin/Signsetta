const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateCardInput(data) {
    let errors = {};

    data.text = validText(data.text) ? data.text : '';

    if(!Validator.isEmpty(data.text)) {
        errors.text = 'Text field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};