const express = require('express')
<<<<<<< HEAD
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')

//load input validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../models/User')





// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
    //form validation
    const { errors, isValid } = validateRegisterInput(req.body)

    // check validation
    if (!isValid) {
        return res.status(400).json(errors)
    }

    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
            return res.status(400).json({ username: "Username already exists" })
        } else {
            const newUser = new User({
                name: req.body.name,
                username: req.body.username,
                password: req.body.password
            })

            //hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err))
                })
            })
        }
    })
})

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
    //form validation
    const { errors, isValid } = validateLoginInput(req.body)

    //check validation
    if (errors) {
        return res.status(400).json(errors)
    }

    const username = req.body.username
    const password = req.body.password

    //find user by username
    User.findOne({ username }).then(user => {
        //check if user exists
        if (!user) {
            return res.status(400).json({ usernamenotfound: "username not found"})
        }
        //check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                //user matched
                //create JWT payload
                const payload = {
                    id: user.id,
                    name: user.name
                }
                //sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 1200 //1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        })
                    }
                )
            } else {
                return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" })
            }
        })
    })
 })
=======
const { User } = require('../../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')


router.get('/', async (req, res) => {
    const users = await User.find()
    res.send(users)
});

router.post('/', async (req, res) => {
    // const { error } = validateUser(req.body)
    // if (error) return res.status(400).send(error.details[0].message)
    
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
>>>>>>> react-recaptcha

module.exports = router