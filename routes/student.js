const Student = require('../models/student');

const mongoose = require('mongoose');

module.exports = {
    getAll: function (req, res) {
        Student.find({}, function (err, docs) {
            res.json(docs);
        });
    },
    getOneById: function (req, res) {
        Student.find({
            _id: req.params.id
        }, function (err, docs) {
            res.json(docs);
        });
    },
    addOne: function (req, res) {
        let student = new Student({
            fullName: req.body.name,
            fees: req.body.fees,
            teacher: req.body.teacherId
        });

        student.save(function () {
            res.json({
                'akl': true
            });
        });
    }
}