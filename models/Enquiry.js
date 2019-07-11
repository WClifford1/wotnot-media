const mongoose = require('mongoose');
const Joi = require('joi')


const Enquiry = mongoose.model('Enquiry', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: Number
    },
    enquiry: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
}))

function validateEnquiry(enquiry) {
    const schema = ({
        name: Joi.string().min(3).max(20).required(),
        email: Joi.string().min(5).max(20).required(),
        enquiry: Joi.string().min(3).max(100).required()
    })

    return Joi.validate(enquiry, schema)
}

exports.Enquiry = Enquiry
exports.validateEnquiry = validateEnquiry