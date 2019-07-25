const mongoose = require('mongoose')


module.exports = function() {
    mongoose.connect('process.env.DB_PATH', (err) => {
    });
}