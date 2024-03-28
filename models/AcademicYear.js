const mongoose = require('mongoose');
const User = require('./User');


const AccademicYear = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    school_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},{timestamps: true});


module.exports = mongoose.model('AccademicYear', AccademicYear);