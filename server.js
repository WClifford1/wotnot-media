const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const enquiry = require('./config/keys')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const db = require('./config/keys').mongoURI

app.get('/api/hello', (req, res) => {
    res.send({express: 'Hello from Express'})
})

mongoose.connect(db)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.log(err))

// app.use('/api/keys')

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))