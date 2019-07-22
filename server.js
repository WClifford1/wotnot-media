const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
// const db = require('./config/keys').mongoURI
const enquiries = require('./routes/api/enquiries')
const bookings = require('./routes/api/bookings')
const cors = require('cors')

const users = require('./routes/api/users')
const auth = require('./routes/api/auth')
const config = require('config')

// const users = require('./routes/api/users')

if (!config.get('jwtPrivateKey')){
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
}

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/enquiries', enquiries)
app.use('/api/users', users)
app.use('/api/auth', auth)

// mongoose.connect(db)
mongoose.connect('mongodb://localhost/wotnotmedia')
.then(() => console.log('Connected to Localhost'))
.catch(err => console.log(err))


app.use('/api/enquiries', enquiries)
app.use('/api/bookings', bookings)
//routes
// app.use('/api/users', users)


const PORT = process.env.PORT || 4000


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))