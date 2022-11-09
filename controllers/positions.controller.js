const { statusCodes, emailActionEnum} = require('../constants');
const positionsService = require("../services/positions.service");
const {emailService} = require("../services");

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
            const description = req.body;
            const position = await positionsService.createPosition(req.body);

            // await emailService.sendEmail(userEmails, emailActionEnum.NEW_POSITION_ADDED, {newPosition: description});

            res.status(statusCodes.CREATE).json(position);

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
            const description = req.body;

            const { positionId } = req.params;

            await positionsService.deletePositionById(positionId);
            // await emailService.sendEmail(userEmails, emailActionEnum.CURRENT_POSITION_REMOVED, {removedPosition: description});

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