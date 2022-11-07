const { Router } = require('express');

const {positionMdlwr} = require("../middlewares");
const {positionsController} = require("../controllers");

const positionsRoute= Router();

positionsRoute.get('/', positionsController.getAllPositions);

positionsRoute.post(
    '/',
    // userMdlwr.checkIfUserBodyIsValid,
    // userMdlwr.checkIfUserEmailIsUniq,
    positionsController.createPosition );

positionsRoute.get(
    '/:positionId',
    // commonMdlwr.checkIfIdIsValid('userId'),
    positionMdlwr.checkIfPositionPresent(),
    positionsController.getPositionByID );


positionsRoute.delete(
    '/:positionId',
    // commonMdlwr.checkIfIdIsValid('userId'),
    // authMdlwr.checkIsAccessToken,
    positionMdlwr.checkIfPositionPresent(),
    positionsController.deletePositionById );

positionsRoute.put(
    '/:positionId',
    // commonMdlwr.checkIfIdIsValid('userId'),
    // authMdlwr.checkIsAccessToken,
    positionMdlwr.checkIfPositionPresent(),
    // userMdlwr.checkIfUserEmailIsUniq,
    positionsController.updatePositionByID );


module.exports = positionsRoute;