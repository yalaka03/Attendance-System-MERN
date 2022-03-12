const isEmpty = require("is-empty");
const Validator = require("validator");

module.exports = function validatePassword(password) {
    let errors = {};
    // make password a string if it is empty for validate
    password = !isEmpty(password) ? password : "";
    // Check if password is valid
    if (!Validator.isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }) )
    {
        // Try to pinpoint what conditions are not met
        score=Validator.isStrongPassword(password,{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: true, pointsPerUnique: 0, pointsPerRepeat: 0, pointsForContainingLower: 1, pointsForContainingUpper: 10, pointsForContainingNumber: 100, pointsForContainingSymbol: 1000 })
        if (score/1000<1)
        {
            errors.symbol=1
        }
        score=score%1000
        if (score/100<1)
        {
            errors.number=1
        }
        score=score%100
        if (score/10<1)
        {
            errors.upper=1
        }
        score=score%10
        if (score<1)
        {
            errors.lower=1
        }
    }
    if(Validator.contains(password, " "))
    {
        errors.space=1
    }
    if(Validator.contains(password, '"') || Validator.contains(password, "'"))
    {
        errors.quote=1
    }
    return {
        errors,
        isValid: isEmpty(errors)
      };
}