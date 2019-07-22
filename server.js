const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/keys').mongoURI
const enquiries = require('./routes/api/enquiries')
const bookings = require('./routes/api/bookings')
const cors = require('cors')
const passport = require('passport')

const users = require('./routes/api/users')




app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/enquiries', enquiries)
app.use('/api/bookings', bookings)
//routes
app.use('/api/users', users)


// mongoose.connect(db)
mongoose.connect('mongodb://localhost/wotnotmedia')
.then(() => console.log('Connected to Localhost'))
.catch(err => console.log(err))

//passport middleware
app.use(passport.initialize())

//passport config
require('./config/passport')(passport)



const PORT = process.env.PORT || 4000


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))