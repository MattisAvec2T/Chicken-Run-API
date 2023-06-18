const mongoose = require('mongoose');

const chickenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
    },
    weight: {
        type: Number,
        required: true
    },
    steps: {
        type: Number,
        default: 0
    },
    isRunning: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Chicken', chickenSchema);