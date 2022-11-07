const { statusCodes } = require('../constants');
const fileService = require("../services/positions.service");

module.exports = {

    getAllPositions: async (req, res, next) => {
        try {
            const users = await fileService.getAllPositions();
            res.json(users);
        } catch (e) {
            next(e);
        }
    },
    // createPosition: async (req, res) => {
    //     try {
    //         const position = await fileService.insertPosition(req.body);
    //
    //         res.status(201).json(position);
    //
    //     } catch (e) {
    //
    //     }
    // },
    createPosition: async (req, res, next) => {
        try{
            const user = await fileService.createPosition(req.body);
            res.status(statusCodes.CREATE).json(user);

        } catch (e) {
            next(e);
        }
    },

    // getUserByID: async (req, res) => {
    //     try {
    //         const {userId} = req.params;
    //
    //         if (Number.isNaN(+userId) || +userId < 0) {
    //             res.status(400).json('Wrong user id');
    //             return;
    //         }
    //
    //         const user = await fileService.getOneUser(+userId);
    //         if (!user) {
    //             res.status(400).json('User not found');
    //             return;
    //         }
    //
    //         res.json(user);
    //
    //     } catch (e) {
    //
    //     }
    // },
    //
    // deleteUserById: async (req, res) => {
    //     try {
    //         const {userId} = req.params;
    //
    //         if (Number.isNaN(+userId) || +userId < 0) {
    //             res.status(400).json('Wrong user id');
    //             return;
    //         }
    //
    //         const user = await fileService.deleteOneUser(+userId);
    //
    //         if (!user) {
    //             res.status(404).json('User not found');
    //             return;
    //         }
    //
    //         res.sendStatus(204);
    //
    //     } catch (e) {
    //
    //     }
    // },
    //
    // updateUserByID: async (req, res) => {
    //     try {
    //         const {userId} = req.params;
    //
    //         if (Number.isNaN(+userId) || +userId < 0) {
    //             res.status(400).json('Wrong user id');
    //             return;
    //         }
    //
    //         const user = await fileService.updateUser(+userId, req.body);
    //
    //         if (!user) {
    //             res.status(404).json('User not found');
    //             return;
    //         }
    //
    //         res.status(201).json(user);
    //
    //     } catch (e) {
    //
    //     }
    //
    // }
}