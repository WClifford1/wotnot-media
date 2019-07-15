const express = require('express')
const { Booking, ValidateBooking } = require('../../models/Booking')
const router = express.Router()

router.get('/', async (req, res) => {
    const bookings = await Booking.find()
    res.send(bookings)
})


router.post('/', async (req, res) => {


    let booking = new Booking({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        booking: req.body.booking,
    })

    booking = await booking.save()
    res.send(booking)
})

module.exports = router