const express = require('express')
const { Enquiry, validateEnquiry } = require('../../models/Enquiry')
const router = express.Router()


router.get('/', async (req, res) => {
    const enquiries = await Enquiry.find()
    res.send(enquiries)
});


router.post('/', async (req, res) => {
    // const { error } = validateEnquiry(req.body)
    // if (error) return res.status(400).send(error.details[0].message)
    
    let enquiry = new Enquiry({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        enquiry: req.body.enquiry,
    })

    enquiry = await enquiry.save()
    res.send(enquiry)
})

module.exports = router