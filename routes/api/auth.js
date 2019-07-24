const express = require('express')
const { User } = require('../../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')

// Function for user login
router.post('/', async (req, res) => {
    
    // Return an error if the username is not in the database
    let user = await User.findOne({ name: req.body.name })
    if (!user) return res.status(400).send('Invalid email or password')

    // Decrypt the password, return an error if invalid password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send('Invalid email or password')

    // Generate jwt for the user
    const token = user.generateAuthToken()
    res.send(token)
})


module.exports = router