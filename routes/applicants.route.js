const { Router } = require('express');

const {applicantsMdlwr,generalMdlwr} = require("../middlewares");
const {applicantsController} = require("../controllers");

const applicantsRoute= Router();

applicantsRoute.get('/', applicantsController.getAllPositions);

applicantsRoute.post(
    '/',
    // applicantsMdlwr.checkIfApplicantBodyIsValid,
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
    applicantsMdlwr.checkIfApplicantPresent(),
    applicantsMdlwr.checkIfUserEmailIsUniq,
    applicantsController.updateApplicantById );


module.exports = applicantsRoute;