const { Applicant } = require('../dataBase');

module.exports = {
    getAllPositions: () => Applicant.find(),
    createApplicant(applicantObject) {
        return Applicant.create(applicantObject);
    },
    getAllByParams(filter) {
        return Applicant.find(filter);
    },
    deleteApplicantById(userId) {
        return Applicant.deleteOne({ _id: userId });
    },
    getOneByParams(filter) {
        return Applicant.findOne(filter);
    },
    getOneById(id) {
        return Applicant.findById(id);
    },
    updateApplicantById(userId, newApplicantObject) {
        return Applicant.findOneAndUpdate({ _id: userId }, newApplicantObject, {
            new: true,
        });
    },

    async getFilteredEmails(value) {
        const { category, japaneseRequired, level } = value;
        const filter = { categories: { $all: [category] }, level };
        if (japaneseRequired) {
            filter.japaneseRequired = true;
        }

        const applicants = await Applicant.find(filter);

        return applicants.map(({ email }) => email);
    },
};
