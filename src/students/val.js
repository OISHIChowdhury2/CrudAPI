const joi = require("@hapi/joi");


const val = {
    user: joi.object({
        name: joi.string().max(5).pattern(new RegExp("^[a-zA-Z]")).required(),
        email: joi.string().email().required(),
        age: joi.number().integer().required()
    })
};

module.exports = val;