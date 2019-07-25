const mongoose = require('mongoose');


const Enquiry = mongoose.model('Enquiry', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    phoneNumber: {
        type: String,
        maxlength: 50
    },
    enquiry: {
        type: String,
        required: true,
        maxlength: 500
    },
    date: {
        type: Date,
        default: Date.now
    },
    isRead: {
        type: Boolean,
        default: false
    }
}))


exports.Enquiry = Enquiry