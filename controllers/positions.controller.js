// const { statusCodes } = require('../constants');
const fileService = require("../services/positions.service");

module.exports={

    getAllPositions: async (req, res, next) => {
        try {
            const positionsFromService = await fileService.getPositions();
            res.json(positionsFromService);
        } catch (e) {
            next(e);
        }
    },
    createPosition:async (req, res) => {

        const position = await fileService.insertPosition(req.body);

        res.status(201).json(position);
    },

    getUserByID: async (req,res) => {

        const {userId} = req.params;

        if (Number.isNaN(+userId) || +userId<0) {
            res.status(400).json('Wrong user id');
            return;
        }

        const user = await fileService.getOneUser(+userId);
        if (!user) {
            res.status(400).json('User not found');
            return;
        }

        res.json(user);
    },

    deleteUserById: async (req, res) => {
        const { userId } = req.params;

        if (Number.isNaN(+userId) || +userId < 0) {
            res.status(400).json('Wrong user id');
            return;
        }

        const user = await fileService.deleteOneUser(+userId);

        if (!user) {
            res.status(404).json('User not found');
            return;
        }

        res.sendStatus(204);
    },

    updateUserByID: async (req, res) => {
        const { userId } = req.params;
        // const { age, name } = req.body;

        if (Number.isNaN(+userId) || +userId < 0) {
            res.status(400).json('Wrong user id');
            return;
        }

        const user = await fileService.updateUser(+userId, req.body);

        if (!user) {
            res.status(404).json('User not found');
            return;
        }


        res.status(201).json(user);

    }
}