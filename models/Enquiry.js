const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true 
    },
    phoneNumber: {
        type: Number,
        required: false
    },
    enquiry: {
        type: String,
        required: true
    }
})