const mongoose = require('mongoose');
const user = require('./user');
const questionsSchema = new mongoose.Schema ({
    createdAt: {
        type: Date,
        default:Date.now()
    },
    question: String,
    author: String,
    timelimit:Time,
    category:String,
    platform:{
        name:String
    },
    score:Number,
    expiresAt:{
        type:Date
    },
    allowedStudents:[ ],
    testNo:Number,
    testTitle:String,
    responses:{
        createdAt: {
            type: Date,
            default:Date.now()
        },
        question_id:questions._id,
        student_id:user._id,
        response:String,
        status:String,
        duration:Time,
        score:Number,
        Reviewer:String,
        Remarks:String,
        Rating: String
    },
    Answers:{
        question_id:questions._id,
        pontentialAnswers:[ ]
    }

})