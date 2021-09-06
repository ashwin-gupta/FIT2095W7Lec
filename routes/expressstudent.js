const express = require('express');
const router = express.Router();

const student = require('./student');

router.get('/list', student.getAll);
router.get('/list/:id', student.getOneById);
router.post('/add', student.addOne);


module.exports = router;