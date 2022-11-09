const { emailActionEnum } = require('../constants');

module.exports = {

    [emailActionEnum.NEW_POSITION_ADDED]: {
        subject: 'Available vacancies',
        templateName: 'new_position_added'
    },

    [emailActionEnum.CURRENT_POSITION_REMOVED]: {
        subject: 'Expired vacancies',
        templateName: 'current_position_removed'
    },

};
