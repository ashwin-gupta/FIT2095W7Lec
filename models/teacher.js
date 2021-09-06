const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    fullName: String,
    salary: Number,
});

module.exports = mongoose.model('Teacher', teacherSchema);