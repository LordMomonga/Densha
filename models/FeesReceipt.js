const mongoose = require('mongoose');

const FeesReceipt = new mongoose.Schema({
    amount: {
        type: String,
        required: true
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BankInfo"
    },
    school_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    speciality: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Speciality"
    },
    status: {
        type: String,
        default: 'pending'
    },
    file_url: {
        type: String,
        default: null
    },
    academic_year: {
        type: String,
        required: true,
        ref: "AccademicYear"
    },
}, { timestamps: true });


module.exports = mongoose.model('FeesReceipt', FeesReceipt);
