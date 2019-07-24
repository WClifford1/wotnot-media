const express = require('express')
const { User } = require('../../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')


// View current users in the database
router.get('/', async (req, res) => {
    const users = await User.find()
    res.send(users)
});


// Create a new user
// Username must be unique
router.post('/', async (req, res) => {
    let user = await User.findOne({ name: req.body.name })
    if (user) return res.status(400).send('User already registered')

    user = new User({
        name: req.body.name,
        password: req.body.password
    })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password,salt )

    await user.save()

    const token = user.generateAuthToken()
    res.header('x-auth-token', token).send(token)
})

module.exports = router