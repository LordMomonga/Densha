const mongoose = require('mongoose');

const Speciality = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    school_id: {
        type: String,
        ref: 'User'
    },
    fees: {
        type: String,
        required: true
    },
    // students: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User',
    //         required: false,
    //         default: []
    //     }
    // ]
}, { timestamps: true });


module.exports = mongoose.model('Speciality', Speciality);