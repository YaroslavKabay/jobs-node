const { Router } = require('express');

const {positionMdlwr, generalMdlwr} = require("../middlewares");
const {positionsController} = require("../controllers");

const positionsRoute= Router();

positionsRoute.get('/', positionsController.getAllPositions);

positionsRoute.post(
    '/',
    // positionMdlwr.IfLevelIsValid,

    positionMdlwr.checkIsUserBodyValid,
    positionsController.createPosition );

positionsRoute.get(
    '/:positionId',
    generalMdlwr.checkIfIdIsValid('positionId'),
    positionMdlwr.checkIfPositionPresent(),
    positionsController.getPositionByID );


positionsRoute.delete(
    '/:positionId',
    generalMdlwr.checkIfIdIsValid('positionId'),
    positionMdlwr.checkIfPositionPresent(),
    positionsController.deletePositionById );

positionsRoute.put(
    '/:positionId',
    generalMdlwr.checkIfIdIsValid('positionId'),
    positionMdlwr.checkIfPositionPresent(),
    positionsController.updatePositionByID );


module.exports = positionsRoute;