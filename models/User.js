<<<<<<< HEAD
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema
const UserSchema = new Schema({
=======
const mongoose = require('mongoose');
// const Joi = require('joi')
const jwt = require('jsonwebtoken')
const config = require('config')

const userSchema = new mongoose.Schema({
>>>>>>> react-recaptcha
    name: {
        type: String,
        required: true
    },
<<<<<<< HEAD
    username: {
        type: String,
        required: true
    },
=======
>>>>>>> react-recaptcha
    password: {
        type: String,
        required: true
    }
})

<<<<<<< HEAD
module.exports = User = mongoose.model("users", UserSchema)
=======
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, name: this.name, password: this.password }, config.get('jwtPrivateKey'))
    return token
}

const User = mongoose.model('User', userSchema)

// function validateUser(user) {
//     const schema = ({
//         name: Joi.string().min(3).required(),
//         password: Joi.string().min(3).required()
//     })
//     return Joi.validate(user, schema)
// }

exports.User = User
// exports.validateUser = validateUser
>>>>>>> react-recaptcha
