const {ApiError} = require('../errors');
const {positionService} = require("../services");
const {statusCodes} = require("../constants");

module.exports = {
    // checkIfUserBodyIsValid : async (req,res,next) => {
    //     try {
    //         const { age, name } = req.body;
    //
    //         if (Number.isNaN(+age) || age <= 0) {
    //             return next (new ApiError('Wrong user age', statusCodes.BAD_REQUEST ));
    //
    //         }
    //         if (name.length < 2) {
    //             return next (new ApiError('Wrong user name', statusCodes.BAD_REQUEST ));
    //
    //         }
    //         next();
    //
    //     }catch (e) {
    //         next(e);
    //     }
    // },
    //
    // checkIfUserEmailIsUniq : async (req,res,next) => {
    //
    //     try {
    //         const {email} = req.body;
    //         const {userId} = req.params;
    //
    //         const userByEmail = await userService.getOneByParams({email});
    //
    //
    //         if (userByEmail && userByEmail._id.toString() !== userId) {
    //             return next(new ApiError('The email already exist', statusCodes.CONFLICT ))
    //
    //         }
    //         next();
    //
    //     }catch (e) {
    //         next(e);
    //     }
    // },

    checkIfPositionPresent: (from = 'params') => async function (req, res, next) {
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
}
