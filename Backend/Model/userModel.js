const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    dobDay: {
        type: Number,
        required: true
    },
    dobMonth: {
        type: Number,
        required: true
    },
    dobYear: {
        type: Number,
        require: true
    },
    showGender: {
        type: Boolean,
        required: true
    },
    genderIdentity: {
        type: String,
        required: true
    },
    genderInterest: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    matches: [
        {
            userId1: {
                type: String,
                required: true
            },
        },
        {
            userId2: {
                type: String,
                required: true
            }
        }
    ]
},
    {
        timestamps: true
    }
)

const Users = mongoose.model("Users", userSchema)
module.exports = Users
