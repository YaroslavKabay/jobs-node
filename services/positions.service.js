const {Position} = require('../dataBase');

module.exports = {

    getAllPositions:  () => {
        return Position.find();
    },
    createPosition(userObject){
        return Position.create(userObject);
    },
    getOneById(id){
        return Position.findById(id);
    },
    deletePositionById(positionId){
        return Position.deleteOne({_id:positionId});
    },
    updatePositionByID(positionId, newPositionObject) {
        return Position.findOneAndUpdate({ _id: positionId }, newPositionObject, { new: true });
    },

}
