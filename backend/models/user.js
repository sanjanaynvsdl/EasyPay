const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },

    firstName: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    },

    password: {
        type: String,
        require: true,
    }
});


const User = mongoose.model("User", userSchema);
module.exports = User;

//trim - to remove white-spaces
//lowercase - to get rid of duplicates "User" "user" (cases)