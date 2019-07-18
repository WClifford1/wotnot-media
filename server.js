const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/keys').mongoURI
const enquiries = require('./routes/api/enquiries')
const users = require('./routes/api/users')
const cors = require('cors')
const auth = require('./routes/api/auth')
const config = require('config')


if (!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined')
    process.exit(1);
}

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/enquiries', enquiries)
app.use('/api/users', users)
app.use('/api/auth', auth)


// mongoose.connect(db)
mongoose.connect('mongodb://localhost/enquiries')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.log(err))


const PORT = process.env.PORT || 4000


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))