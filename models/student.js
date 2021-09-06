const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    fullName: String,
    fees: Number,
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
    }
});

module.exports = mongoose.model('Student', studentSchema);