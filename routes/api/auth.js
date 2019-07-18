const express = require('express')
const { User } = require('../../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')
const Joi = require('joi')

router.post('/', async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    let user = await User.findOne({ name: req.body.name })
    if (!user) return res.status(400).send('Invalid email or password')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send('Invalid email or password')

    const token = user.generateAuthToken()
    res.send(token)
})



function validate(req) {
    const schema = ({
        name: Joi.string().min(3).required(),
        password: Joi.string().min(3).required()
    })
    return Joi.validate(req, schema)
}

module.exports = router