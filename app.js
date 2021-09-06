const express = require('express');
const mongoose = require('mongoose');
const expressTeacherRouter = require('./routes/expressteacher')
const expressStudentRouter = require('./routes/expressstudent')


const app = express();
app.set('PORT', 8080);

const URL = "mongodb://localhost:27017/fit2095w7app"

mongoose.connect(URL, function (err) {
    if (err) {
        console.log(err);;
        return;
    }

    console.log('Connection established')
})

app.use(express.json());


app.use('/teacher', expressTeacherRouter);
app.use('/student', expressStudentRouter);

app.post('student/add')

app.listen(app.get('PORT'), () => {
    console.log(`Listening on port ${app.get('PORT')}`);
})