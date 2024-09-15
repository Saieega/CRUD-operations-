const mongoose=require('mongoose')

const alienSchema=new mongoose.Schema
({
    studentName: {
        type: String,
        required:true
    },
    skillName: {
        type: String,
        required: true
    },
    proficiency: {
        type: String,
        required: true,
        enum: ['Beginner', 'Intermediate', 'Expert']
    },
    yearsOfExperience: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    certified: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model('Alien', alienSchema);
