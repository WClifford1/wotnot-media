// Routes for booking model

const express = require('express')
const { Booking } = require('../../models/Booking')
const router = express.Router()

router.get('/', async (req, res) => {
    const bookings = await Booking.find()
    res.send(bookings)
})


router.post('/', async (req, res) => {
    // const error = validateBooking(req.body)


    let booking = new Booking({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        timeOfBooking: req.body.timeOfBooking,
        booking: req.body.booking,
    })

    booking = await booking.save()
    res.send(booking)
})

module.exports = router