const { statusCodes, emailActionEnum} = require('../constants');
const {applicantsService,emailService} = require('../services/');

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
            // await emailService.sendEmail(email, emailActionEnum.WELCOME, {userName: name});

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
            const {email} = req.body;

            const applicant = await applicantsService.updateApplicantById(userId, req.body);
            await emailService.sendEmail(email,emailActionEnum.CURRENT_POSITION_REMOVED, {userName: email});

            res.json(applicant);
        } catch (e) {
            next(e);
        }
    },
}