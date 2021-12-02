const mongoose = require('mongoose');
const user = require('./user');
const questionsSchema = new mongoose.Schema ({
    createdAt: {
        type: Date,
        default:Date.now()
    },
    question: String,
    author: String,
    timeLimit:Date,
    category:String,
    //required:true,
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
        questionId:question._id,
        studentId:user._id,
        response:String,
        status:String,
        duration:Date,
        score:Number,
        reviewer:String,
        remarks:String,
        rating: String
    },
    Answers:{
        questionId:question._id,
        pontentialAnswers:[ ]
    }

})

module.exports = mongoose.model('question',questionsSchema)