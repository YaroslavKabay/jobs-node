const { statusCodes } = require('../constants');
const { applicantsService } = require('../services/');

module.exports = {
    createApplicant: async (req, res, next) => {
        try {
            const applicantToAdd = await applicantsService.createApplicant(req.body);
            const { _id } = applicantToAdd;

            res.status(statusCodes.CREATE).json(_id);
        } catch (e) {
            next(e);
        }
    },
    deleteApplicantById: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await applicantsService.deleteApplicantById(userId);

            res.sendStatus(statusCodes.NO_CONTENT);
        } catch (e) {
            next(e);
        }
    },
    updateApplicantById: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await applicantsService.updateApplicantById(userId, req.body);

            res.sendStatus(statusCodes.OK);
        } catch (e) {
            next(e);
        }
    },
};
