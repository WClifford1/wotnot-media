const express = require('express')
const { User } = require('../../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')


router.post('/', async (req, res) => {
    
    let user = await User.findOne({ name: req.body.name })
    if (!user) return res.status(400).send('Invalid email or password')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send('Invalid email or password')

    const token = user.generateAuthToken()
    res.send(token)
})


module.exports = router