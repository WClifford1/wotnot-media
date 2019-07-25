const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const enquiries = require('./routes/api/enquiries')
const bookings = require('./routes/api/bookings')
const cors = require('cors')
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')
require('dotenv').config()


if (!process.env.jwtPrivateKey){
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
}

console.log(`Node ENV: ${process.env.NODE_ENV}`)
console.log(`app: ${app.get('env')}`)

// app.use(cors({origin: "https://festive-cori-46ce58.netlify.com"}))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/enquiries', enquiries)
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/bookings', bookings)


// if(process.env.NODE_ENV === 'production') {
//     const db = process.env.DB_PATH
// } else {
//    const db = process.env.DB_PATH_DEV
// }// mongoose.connect(process.env.DB_PATH, { useNewUrlParser: true }, (err) => {

mongoose.connect('mongodb://localhost/enquiries', (err) => {
    if (err) {
        console.log('Error connecting to database', err)
    } else {
        console.log('Connected to database!')
    }
});


const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))