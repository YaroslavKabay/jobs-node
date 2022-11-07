const fs = require('fs/promises');
const path = require("path");
const {Position} = require('../dataBase');


// const pathToFile = path.join(process.cwd(),'dataBase', 'positions.json');
//
// const reader = async () => {
//
//     try{
//         const buffer = await fs.readFile(pathToFile);
//         const data = buffer.toString();
//
//         const users = data ? JSON.parse(data) : [];
//
//         return users.sort((a, b) => a.id - b.id);
//     }
//     catch (e) {
//         console.log(e);
//     }
// }
// const writer = async (users) => {
//
//     try{
//
//         await fs.writeFile(pathToFile, JSON.stringify(users));
//
//     }
//     catch (e) {
//         console.log(e);
//     }
// }

module.exports = {

    // getPositions:  () => {
    //     return reader();
    // },

    getAllPositions:  () => {
        return Position.find();
    },
    createPosition(userObject){
        return Position.create(userObject);
    },

    // insertPosition: async (positionObject) => {
    //     const positions = await reader();
    //
    //     positionObject.id = positions.length ? positions[positions.length - 1].id + 1 : 1;
    //     positions.push(positionObject);
    //
    //     await writer(positions);
    //
    //     return positionObject;
    // },
    // getOneUser: async (id) => {
    //     const users = await reader();
    //
    //     return users.find((user) => user.id === id);
    // },
    // deleteOneUser: async (id) => {
    //     const users = await reader();
    //
    //     const index = users.findIndex((user) => user.id === id);
    //
    //     if (index < 0) return;
    //
    //     const user = users[index];
    //     users.splice(index, 1);
    //
    //     await writer(users);
    //     return user;
    // },
    // updateUser: async (id, data) => {
    //     const users = await reader();
    //
    //     const index = users.findIndex((user) => user.id === id);
    //
    //     if (index < 0) return;
    //
    //     users[index] = { ...users[index], ...data };
    //     await writer(users);
    //
    //     return users[index];
    // }

}
