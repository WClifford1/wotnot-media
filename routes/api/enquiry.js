const express = require('express')
const router = express.Router()

const enquiry = require('../../models/Enquiry')

router.get('/test', (req, res) => {
    res.send('Test route')
});

module.exports = router