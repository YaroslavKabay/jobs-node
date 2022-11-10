const {Position} = require('../dataBase');

module.exports = {

    getAllPositions:  () => Position.find(),
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
    getAllPositionsDynamically(query){
        return Position.find(query);
    },
    // getUserEmails(body){
    //     const {category, japaneseRequired, level} = body;
    //     const filter = {categories: {$all: [category]}, level};
    //     if (japaneseRequired) {
    //         filter.japaneseRequired = true
    //     }
    //
    //     const applicants = await applicantsService.getAllByParams(filter);
    //
    //     const emails = (arr) => arr.map(({ email }) => email)
    //
    //     const userEmails = emails(applicants)
    //
    // },
};
