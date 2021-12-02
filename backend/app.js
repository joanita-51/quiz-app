
const mongoose = require('mongoose')

const examSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    allowedStudents: [],
    questions: {
        type: Array,
        number: {
            type: Number,
            required: true,
            unique: true
        },
        elementType: { type: String },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        label: {
            type: String,
            required: 1
        },
        choices: [],
        answerForChoices: [],
        potentialAnswersForTextAreaInput: [],
        radioexamAnswer: {
            type: String
        },
        author: String,
        timeLimit: {
            type: Number,
        },
        category: {
            type: String,
            required: 1
        },
        isRequired: Boolean,
        platform: String,
        score: Number,
        expireAt: {
            type: Date,
        },
        responses: {
            type: Array,
            createdAt: {
                type: Date,
                default: Date.now,
                required: 1
            },
            studentId: {
                type: String,
                required: 1
            },
            answer: String,
            status: {
                type: String,
            },
            duration: {
                type: Number,
                required: 1,
            },
            score: Number,
            reviewer: String,
            remarks: String,
            rating: Number
        }
    }
})

examSchema.statics.getExams = (author = null) => {
    return author !== null ? exam.find({ author: author }) : exam.find()
}

examSchema.statics.getExam = (examId) => {
    return exam.findOne({ _id: examId })
}

examSchema.statics.update = (data) => {
    return exam.findOneAndUpdate({ _id: data._id }, data)
}

examSchema.statics.delete = (examId) => {
    return exam.findOneAndDelete({ _id: examId })
}

const exam = mongoose.model('Exam', examSchema)
module.exports = exam

