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
