const { Router } = require('express');

const {positionMdlwr, generalMdlwr} = require('../middlewares');
const {positionsController} = require('../controllers');
const {updatePositionValidator,newPositionValidator}= require('../validators/position.validator');

const positionsRoute= Router();

positionsRoute.get('/', positionsController.getAllPositions);

positionsRoute.post(
    '/',
    // positionMdlwr.IfLevelIsValid,
    generalMdlwr.checkIfBodyIsValid(newPositionValidator),
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


positionsRoute.patch(
    '/:positionId',
    generalMdlwr.checkIfBodyIsValid(updatePositionValidator),
    generalMdlwr.checkIfIdIsValid('positionId'),
    positionMdlwr.checkIfPositionPresent(),
    positionsController.updatePositionByID );


module.exports = positionsRoute;
