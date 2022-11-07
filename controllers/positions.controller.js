const { statusCodes } = require('../constants');
const positionsService = require("../services/positions.service");

module.exports = {

    getAllPositions: async (req, res, next) => {
        try {
            const users = await positionsService.getAllPositions();
            res.json(users);
        } catch (e) {
            next(e);
        }
    },
    createPosition: async (req, res, next) => {
        try{
            const user = await positionsService.createPosition(req.body);
            res.status(statusCodes.CREATE).json(user);

        } catch (e) {
            next(e);
        }
    },
    getPositionByID: async (req, res) => {
        try {
            const { position } = req;

            res.json(position);

        } catch (e) {

        }
    },
    deletePositionById: async (req, res, next) => {
        try{

            const { positionId } = req.params;

            await positionsService.deletePositionById(positionId);

            res.sendStatus(statusCodes.NO_CONTENT);

        } catch (e) {
            next(e);
        }
    },

    updatePositionByID: async (req, res, next) => {
        try {
            const { positionId } = req.params;

            const position = await positionsService.updatePositionByID(positionId, req.body);

            res.json(position);
        } catch (e) {
            next(e);
        }
    },
}