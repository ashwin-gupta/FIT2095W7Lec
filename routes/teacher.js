const Teacher = require('../models/teacher');

const mongoose = require('mongoose');

module.exports = {
    getAll: function (req, res) {
        Teacher.find({}, function (err, docs) {
            res.json(docs);
        });
    },
    getOneById: function (req, res) {
        Teacher.find({
            _id: req.params.id
        }, function (err, docs) {
            res.json(docs);
        });
    },
    addOne: function (req, res) {
        console.log(req.body);
        let teacher = new Teacher({
            fullName: req.body.name,
            salary: req.body.salary
        });

        teacher.save(function () {
            res.json({
                'akl': true
            });
        });
    }
}