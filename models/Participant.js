const mongoose = require('mongoose');

const Participant = new mongoose.Schema({
    classroom_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    student_count: {
        type: String,
        required: true
    },
    academic_year: {
        type: String,
        required: true,
        ref: "AccademicYear"
    },
}, { timestamps: true });


module.exports = mongoose.model('Participant', Participant);