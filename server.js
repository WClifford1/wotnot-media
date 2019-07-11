const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/keys').mongoURI
const enquiries = require('./routes/api/enquiries')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/enquiries', enquiries)
// mongoose.connect(db)
mongoose.connect('mongodb://localhost/enquiries')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.log(err))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))