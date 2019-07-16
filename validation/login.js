const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateLoginInput(data) {
    let errors = {}


//convert empty fields to an empty string so we can use validator functions
data.username = !isEmpty(data.username) ? data.username : ""
data.password = !isEmpty(data.password) ? data.password : ""

//username checks
if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required"
}

//password checks
if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required"
}

return {
    errors,
    isValid: Object.keys(errors).length > 0
}
}
