const { statusCodes, emailActionEnum } = require('../constants');
const positionsService = require('../services/positions.service');
const { emailService, applicantsService } = require('../services');

module.exports = {
    getAllPositions: async (req, res, next) => {
        try {
            const getAllPositionsDynamically =
        await positionsService.getAllPositionsDynamically(req.query);
            res.json(getAllPositionsDynamically);
        } catch (e) {
            next(e);
        }
    },
    getPositionByID: (req, res) => {
        try {
            const { position } = req;

            res.json(position);
        } catch (e) {}
    },
    createPosition: async (req, res, next) => {
        try {
            const description = req.body;

            const positionToAdd = await positionsService.createPosition(req.body);
            const { _id } = positionToAdd;
            const userEmails = await applicantsService.getFilteredEmails(req.body);

            userEmails.map(async (userEmail) => {
                await emailService.sendEmail(
                    userEmail,
                    emailActionEnum.NEW_POSITION_ADDED,
                    { newPosition: JSON.stringify(description) }
                );
            });

            res.status(statusCodes.CREATE).json(_id);
        } catch (e) {
            next(e);
        }
    },
    deletePositionById: async (req, res, next) => {
        try {
            const { positionId } = req.params;

            const positionInfo = await positionsService.getOneById(positionId);

            const userEmails = await applicantsService.getFilteredEmails(
                positionInfo
            );

            const {
                _doc: { _id, createdAt, updatedAt, ...restPositionInfo },
            } = positionInfo;

            userEmails.map(async (userEmail) => {
                await emailService.sendEmail(
                    userEmail,
                    emailActionEnum.CURRENT_POSITION_REMOVED,
                    { newPosition: JSON.stringify(restPositionInfo) }
                );
            });

            await positionsService.deletePositionById(positionId);

            res.sendStatus(statusCodes.NO_CONTENT);
        } catch (e) {
            next(e);
        }
    },

    updatePositionByID: async (req, res, next) => {
        try {
            const { positionId } = req.params;

            await positionsService.updatePositionByID(positionId, req.body);

            res.sendStatus(statusCodes.OK);
        } catch (e) {
            next(e);
        }
    },
};
