const Joi = require('joi');

const { EMAIL, PASSWORD } = require('../constants');
const { ApiError } = require('../errors');
const { BAD_REQUEST } = require('../constants/');

const categoryValidator = Joi.string().alphanum()
    .min(2)
    .max(35)
    .trim();
const levelValidator = Joi.string().alphanum()
    .min(2)
    .max(35)
    .trim();
const companyValidator = Joi.string().alphanum()
    .min(2)
    .max(35)
    .trim();
const descriptionValidator = Joi.string().alphanum()
    .min(2)
    .max(35)
    .trim();
const japaneseRequiredValidator = Joi.boolean();


const newUserValidator= Joi.object({
    category: categoryValidator.required(),
    level: levelValidator.required(),
    company: companyValidator.required(),
    description: descriptionValidator,
    japaneseRequired: japaneseRequiredValidator.required(),
    // girls: Joi.array().items(Joi.string()).when('age', { is: 26, then: Joi.required() })
});

const updateUserValidator = Joi.object({
    category: categoryValidator,
    level: levelValidator,
    company: companyValidator,
    description: descriptionValidator,
    japaneseRequired: japaneseRequiredValidator,

});


module.exports = {
    newUserValidator,
    // updateUserValidator,
};