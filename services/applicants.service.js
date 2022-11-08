const {Applicant} = require('../dataBase');

module.exports = {

    getAllPositions:  () => {
        return Applicant.find();
    },
    createApplicant(applicantObject){
        return Applicant.create(applicantObject);
    },
    deleteApplicantById(userId){
        return Applicant.deleteOne({_id:userId});
    },
    getOneByParams(filter){
        return Applicant.findOne(filter);
    },
    getOneById(id){
        return Applicant.findById(id);
    },
    updateApplicantById(userId, newApplicantObject) {
        return Applicant.findOneAndUpdate({ _id: userId }, newApplicantObject, { new: true });
    },

}
