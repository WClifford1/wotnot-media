const mongoose = require('mongoose')


module.exports = function() {
    mongoose.connect(process.env.DB_PATH, { useNewUrlParser: true }, (err) => {
        if (err) {
            console.log('Error connecting to database', err)
        } else {
            console.log('Connected to database!')
        }
    });
}