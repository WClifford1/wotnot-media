const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateRegisterInput(data) {
    let errors = {}


//Convert empty fields to an empty string so we can use validator functions
data.name = !isEmpty(data.name) ? data.name : ""
data.username = !isEmpty(data.username) ? data.username : ""
data.password = !isEmpty(data.password) ? data.password : ""

//name checks
if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required"
}

//username checks
if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required"
} 

//password check
if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required"
}

//min and max characters on password
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters"
}

return {
    errors,
    isValid: isEmpty(errors)
}
}