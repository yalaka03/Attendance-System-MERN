const isEmpty = require("is-empty");
const Validator = require("validator");

module.exports = function validatePassword(password) {
    let errors = {};
    // make password a string if it is empty for validate
    password = !isEmpty(password) ? password : "";
    // Check if password is valid
    num_cond_full = 5
    if (Validator.isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
        return {
            errors,
            isValid: true,
            num_cond: num_cond_full
        }
    }

    // Try to pinpoint what conditions are not met
    if (!Validator.isLength(password, { min: 8 })) {
        errors.length = 1;
        num_cond_full -= 1;
    }
    score = Validator.isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: true, pointsPerUnique: 0, pointsPerRepeat: 0, pointsForContainingLower: 1, pointsForContainingUpper: 10, pointsForContainingNumber: 100, pointsForContainingSymbol: 1000 })
    if (score / 1000 < 1) {
        errors.symbol = 1;
        num_cond_full -= 1;
    }
    score = score % 1000
    if (score / 100 < 1) {
        errors.number = 1;
        num_cond_full -= 1;
    }
    score = score % 100
    if (score / 10 < 1) {
        errors.upper = 1;
        num_cond_full -= 1;
    }
    score = score % 10
    if (score < 1) {
        errors.lower = 1;
        num_cond_full -= 1;
    }

    if (Validator.contains(password, " ")) {
        errors.space = 1;
    }
    if (Validator.contains(password, '"') || Validator.contains(password, "'")) {
        errors.quote = 1;
    }
    return {
        errors,
        isValid: false,
        num_cond: num_cond_full
    };
}
