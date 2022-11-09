const { statusCodes } = require('../constants');
const {applicantsService} = require('../services/');

module.exports = {

    getAllPositions: async (req, res, next) => {
        try {
            const users = await applicantsService.getAllPositions();
            res.json(users);
        } catch (e) {
            next(e);
        }
    },
    createApplicant: async (req, res, next) => {
        try{
            const applicant = await applicantsService.createApplicant(req.body);

            res.status(statusCodes.CREATE).json(applicant);
            console.log(typeof applicant);
        } catch (e) {
            next(e);
        }
    },
    deleteApplicantById: async (req, res, next) => {
        try{

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

            const applicant = await applicantsService.updateApplicantById(userId, req.body);

            res.json(applicant);
        } catch (e) {
            next(e);
        }
    },
}