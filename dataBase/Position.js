const { Schema, model } = require('mongoose');

const positionSchema = new Schema({
    category: { type: String, trim: true, required: true },
    level: { type: String, trim: true, required: true },
    company: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    japaneseRequired: { type: Boolean, required: true },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('position', positionSchema);

