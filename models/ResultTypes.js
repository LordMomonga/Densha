const mongoose = require('mongoose');

const ResultType = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    school_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });


module.exports = mongoose.model('ResultType', ResultType);
