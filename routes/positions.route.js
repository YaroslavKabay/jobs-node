const { Router } = require('express');

// const {authMdlwr, commonMdlwr, userMdlwr} = require("../middlewares");
const {positionsController} = require("../controllers");

const positionsRoute= Router();

positionsRoute.get('/', positionsController.getAllPositions);

positionsRoute.post(
    '/',
    // userMdlwr.checkIfUserBodyIsValid,
    // userMdlwr.checkIfUserEmailIsUniq,
    positionsController.createPosition
);

positionsRoute.get(
    '/:userId',
    // commonMdlwr.checkIfIdIsValid('userId'),
    // userMdlwr.checkIfUserPresent(),
    positionsController.getUserByID );

positionsRoute.delete(
    '/:userId',
    // commonMdlwr.checkIfIdIsValid('userId'),
    // authMdlwr.checkIsAccessToken,
    // userMdlwr.checkIfUserPresent(),
    positionsController.deleteUserById );

positionsRoute.put(
    '/:userId',
    // commonMdlwr.checkIfIdIsValid('userId'),
    // authMdlwr.checkIsAccessToken,
    // userMdlwr.checkIfUserPresent(),
    // userMdlwr.checkIfUserEmailIsUniq,
    positionsController.updateUserByID );


module.exports = positionsRoute;