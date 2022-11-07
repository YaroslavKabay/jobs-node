const { Router } = require('express');

// const {authMdlwr, commonMdlwr, userMdlwr} = require("../middlewares");
const {positionsController, applicantsController} = require("../controllers");

const applicantsRoute= Router();

applicantsRoute.get('/', applicantsController.getAllPositions);

applicantsRoute.post(
    '/',
    // userMdlwr.checkIfUserBodyIsValid,
    // userMdlwr.checkIfUserEmailIsUniq,
    applicantsController.createPosition
);

applicantsRoute.delete(
    '/:userId',
    // commonMdlwr.checkIfIdIsValid('userId'),
    // authMdlwr.checkIsAccessToken,
    // userMdlwr.checkIfUserPresent(),
    applicantsController.deleteUserById );

applicantsRoute.put(
    '/:userId',
    // commonMdlwr.checkIfIdIsValid('userId'),
    // authMdlwr.checkIsAccessToken,
    // userMdlwr.checkIfUserPresent(),
    // userMdlwr.checkIfUserEmailIsUniq,
    applicantsController.updateUserByID );


module.exports = applicantsRoute;