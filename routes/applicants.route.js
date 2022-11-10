const { Router } = require('express');

const {applicantsMdlwr,generalMdlwr} = require('../middlewares');
const {applicantsController} = require('../controllers');
const {newApplicantValidator, updateApplicantValidator} = require('../validators/applicant.validator');

const applicantsRoute= Router();

applicantsRoute.post(
    '/',
    generalMdlwr.checkIfBodyIsValid(newApplicantValidator),
    applicantsMdlwr.checkIfUserEmailIsUniq,
    applicantsController.createApplicant
);

applicantsRoute.delete(
    '/:userId',
    generalMdlwr.checkIfIdIsValid('userId'),
    applicantsMdlwr.checkIfApplicantPresent(),
    applicantsController.deleteApplicantById);

applicantsRoute.put(
    '/:userId',
    generalMdlwr.checkIfIdIsValid('userId'),
    generalMdlwr.checkIfBodyIsValid(updateApplicantValidator),
    applicantsMdlwr.checkIfApplicantPresent(),
    applicantsMdlwr.checkIfUserEmailIsUniq,
    applicantsController.updateApplicantById );


module.exports = applicantsRoute;
