const { statusCodes, emailActionEnum} = require('../constants');
const {applicantsService, emailService} = require('../services/');
const {updateApplicantById} = require("../services/applicants.service");

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
            const applicantToAdd = await applicantsService.createApplicant(req.body);
            const {_id} = applicantToAdd;

            res.status(statusCodes.CREATE).json(_id);
            // console.log(typeof applicant);
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
            // const {email} = req.body;

            await applicantsService.updateApplicantById(userId, req.body);
            // await emailService.sendEmail(email,emailActionEnum.CURRENT_POSITION_REMOVED, {userName: email});

            res.sendStatus(statusCodes.OK);

        } catch (e) {
            next(e);
        }
    },
}