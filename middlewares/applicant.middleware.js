const {ApiError} = require('../errors');
const {applicantsService} = require('../services');
const {statusCodes} = require('../constants');

module.exports = {

    // checkIfApplicantBodyIsValid : async (req,res,next) => {
    //     try {
    //         const { email, categories, japaneseRequired, level } = req.body;
    //
    //         // if (Number.isNaN(+age) || age <= 0) {
    //         //     return next (new ApiError('Wrong user age', statusCodes.BAD_REQUEST ));
    //         //
    //         // }
    //         // if (name.length < 2) {
    //         //     return next (new ApiError('Wrong user name', statusCodes.BAD_REQUEST ));
    //         //
    //         // }
    //         if (level !== 'junior'|| level !== 'middle' || level !== 'senior') {
    //             return next (new ApiError('Please choose junior or senior or middle level', statusCodes.BAD_REQUEST ));
    //         }
    //
    //         // if (name.length < 2) {
    //         //     return next (new ApiError('Wrong user name', statusCodes.BAD_REQUEST ));
    //         // }
    //         next();
    //
    //     }catch (e) {
    //         next(e);
    //     }
    // },


    checkIfApplicantPresent: (from = 'params') => async function(req, res, next) {
        try {
            const { userId } = req[from];

            const applicant = await applicantsService.getOneById(userId);

            if (!applicant) {
                return next(new ApiError('Applicant not found', statusCodes.NOT_FOUND));
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkIfUserEmailIsUniq : async (req,res,next) => {

        try {
            const {email} = req.body;
            const {userId} = req.params;

            const userByEmail = await applicantsService.getOneByParams({email});

            if (userByEmail && userByEmail._id.toString() !== userId) {
                return next(new ApiError('The email already exist', statusCodes.CONFLICT ));
            }

            next();

        }catch (e) {
            next(e);
        }
    },
};
