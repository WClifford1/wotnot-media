const mongoose = require('mongoose')
const Joi = require('joi')

const Booking = mongoose.model('Booking', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true
    }, 
    timeOfBooking:{
        type: String

    
    },
    booking: {
        type: String
    }
}))

// function validateBooking(booking){
//     const schema = ({
//         name: Joi.string().min(3).max(20).required(),
//         email: Joi.string().min(5).max(20).required(),
//         booking: Joi.string().min(3).max(100).required(),
        
//     })

//     return Joi.validate(booking, schema)
// }

exports.Booking = Booking
// exports.validateBooking = validateBooking