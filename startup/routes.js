const bodyParser = require('body-parser')
const enquiries = require('../routes/api/enquiries')
const users = require('../routes/api/users')
const auth = require('../routes/api/auth')

module.exports = function(app) {
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use('/api/enquiries', enquiries)
    app.use('/api/users', users)
    app.use('/api/auth', auth)
}