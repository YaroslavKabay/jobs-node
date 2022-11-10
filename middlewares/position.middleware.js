const {ApiError} = require('../errors');
const {positionService} = require('../services');
const {statusCodes} = require('../constants');
// const {positionValidator} = require("../validators");

module.exports = {
    // IfLevelIsValid : async (req,res,next) => {
    //     try {
    //         const { level } = req.body;
    //
    //         if ( level === 'junior'||level === 'middle'||level === 'senior') {
    //             return next();
    //         }else {
    //             return next (new ApiError('Please choose middle or senor or junior level', statusCodes.BAD_REQUEST ));
    //         }
    //
    //     }catch (e) {
    //         next(e);
    //     }
    // },

    // checkIsUserBodyValid: async (req, res, next) => {
    //     try {
    //         const validate = positionValidator.newUserValidator.validate(req.body);
    //
    //         if (validate.error) {
    //             return next(new ApiError(validate.error.message, statusCodes.BAD_REQUEST));
    //         }
    //
    //         req.body = validate.value;
    //
    //         next();
    //     } catch (e) {
    //         next(e);
    //     }
    // },


    checkIfPositionPresent: (from = 'params') => async function(req, res, next) {
        try {
            const { positionId } = req[from];

            const position = await positionService.getOneById(positionId);

            if (!position) {
                return next(new ApiError('Position not found', statusCodes.NOT_FOUND));
            }

            req.position = position;
            next();
        } catch (e) {
            next(e);
        }
    }
};
