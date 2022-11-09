const Joi = require('joi');

const { EMAIL } = require('../constants/regex.enum');
const { ApiError } = require('../errors');
const { BAD_REQUEST } = require('../constants/');

const applicantEmailValidator = Joi.string().regex(EMAIL)
    .lowercase()
    .trim()
    .error(new ApiError('Email not valid', BAD_REQUEST));
const applicantLevelValidator = Joi.string().alphanum()
    .trim()
    .valid('junior','middle','senior')
    .error(new ApiError('Please choose junior or middle or senior', BAD_REQUEST));

const applicantCategoriesValidator = Joi.array().items(Joi.string()
    .trim()
    .valid('nodeJS', 'react', 'angular', 'javaScript'))
    .error(new ApiError('Please choose react or angular or nodeJS', BAD_REQUEST));

const japaneseRequiredValidator = Joi.boolean()
    .error(new ApiError('Please choose true or false', BAD_REQUEST));


const newApplicantValidator= Joi.object({
    email: applicantEmailValidator.required(),
    level: applicantLevelValidator.required(),
    categories: applicantCategoriesValidator.required(),
    japaneseRequired: japaneseRequiredValidator.required(),
});

const updateApplicantValidator = Joi.object({
    email: applicantEmailValidator,
    level: applicantLevelValidator,
    categories: applicantCategoriesValidator,
    japaneseRequired: japaneseRequiredValidator,
});


module.exports = {
    newApplicantValidator,
    updateApplicantValidator,
};