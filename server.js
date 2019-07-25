const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
// app.use(cors({origin: "https://festive-cori-46ce58.netlify.com"}))
require('./startup/db')();
require('./startup/routes')(app)
require('dotenv').config()


if (!process.env.jwtPrivateKey){
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
}


const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))

module.exports = server