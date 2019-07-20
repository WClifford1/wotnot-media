const mongoose = require('mongoose');
// const Joi = require('joi')
const jwt = require('jsonwebtoken')
const config = require('config')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'))
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
