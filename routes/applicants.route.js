const { Router } = require('express');

// const {authMdlwr, commonMdlwr, userMdlwr} = require("../middlewares");
const {applicantsController} = require("../controllers");

const applicantsRoute= Router();

applicantsRoute.get('/', applicantsController.getAllPositions);

applicantsRoute.post(
    '/',
    // userMdlwr.checkIfUserBodyIsValid,
    // userMdlwr.checkIfUserEmailIsUniq,
    applicantsController.createApplicant
);

applicantsRoute.delete(
    '/:userId',
    // commonMdlwr.checkIfIdIsValid('userId'),
    // authMdlwr.checkIsAccessToken,
    // userMdlwr.checkIfUserPresent(),
    applicantsController.deleteApplicantById);

applicantsRoute.put(
    '/:userId',
    // commonMdlwr.checkIfIdIsValid('userId'),
    // authMdlwr.checkIsAccessToken,
    // userMdlwr.checkIfUserPresent(),
    // userMdlwr.checkIfUserEmailIsUniq,
    applicantsController.updateApplicantById );


module.exports = applicantsRoute;