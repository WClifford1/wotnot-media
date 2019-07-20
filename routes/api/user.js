const router = require('express').Router()
// const User = require('../../models/User')

//Validation
// const Joi = require('@hapi/joi')

// const schema = {
//     name: Joi.string().min(6).required(),
//     password: Joi.string().min(6).required()
// }

router.post('/register', async (req, res) => {
    //  res.send('Register')
    
    //validate the data before we a user
    // const validation = Joi.validate(req.body, schema)
    
    const user = new User({
        name: req.body.name,
        password: req.body.password
    })
    try{
        const savedUser = await user.save()
        res.send(savedUser)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports = router