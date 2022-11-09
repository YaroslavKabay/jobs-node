const Joi = require('joi');

const { ApiError } = require('../errors');
const { BAD_REQUEST } = require('../constants/');

const categoryValidator = Joi.string().alphanum()
    .min(2)
    .max(35)
    .trim()
    .valid("nodeJS", "react", "angular")
    .error(new ApiError('Please choose react or angular or nodeJS', BAD_REQUEST));

const levelValidator = Joi.string().alphanum()
    .trim()
    .valid('junior','middle','senior')
    .error(new ApiError('Please choose junior or middle or senior', BAD_REQUEST));

const companyValidator = Joi.string().alphanum()
    .min(2)
    .max(35)
    .trim();

const descriptionValidator = Joi.string().alphanum()
    .min(2)
    .max(35)
    .trim();

const japaneseRequiredValidator = Joi.boolean()
    .error(new ApiError('Please choose true or false', BAD_REQUEST));


const newUserValidator= Joi.object({
    category: categoryValidator.required(),
    level: levelValidator.required(),
    company: companyValidator.required(),
    description: descriptionValidator,
    japaneseRequired: japaneseRequiredValidator.required(),
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
    updateUserValidator,
};