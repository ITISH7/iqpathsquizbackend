import mongoose from 'mongoose';
const { Schema } = mongoose;

const questionSchema = new Schema({
    topic : {
        type : String,
        require : true,
    },
    level : {
        type : String,
        require : true,
    },
    totalQuestions : {
        type : Number,
        require : true,
    },
    totalScore : {
        type : String,
    },
    totalTime : {
        type : String,
    },
    questions : [
        { 
            questions : {
                type : String,
                require : true,
            },
            code : {
                type : String,
            },
            choices : {
                type : [String],
                require : true,
            },
            type : {
                type : String,
                require : true,
            },
            correctAnswers : {
                type : [String],
                require : true,
            },
            score : {
                type : Number,
                require : true,
            }
        }
    ]
 
});

module.exports = mongoose.model("Question", questionSchema);

