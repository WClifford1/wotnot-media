const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
require('dotenv').config()


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
    }
})


// Generate an authenitcation token with the users' id, password and jwt secret key env variable
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, name: this.name, password: this.password }, process.env.jwtPrivateKey)
    return token
}


const User = mongoose.model('User', userSchema)

exports.User = User
