const { Schema, model } = require('mongoose');

const applicantSchema = new Schema({
    email: { type: String, trim: true, lowercase: true, required: true, unique: true },
    categories: [{ type: String, trim: true, required: true }],
    japaneseRequired: { type: Boolean, required: true },
    level: { type: String, trim: true, required: true },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('applicant', applicantSchema);
