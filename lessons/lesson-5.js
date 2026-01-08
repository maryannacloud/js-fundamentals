// logical operators
// "AND"
console.log(true && true) // all values must be true for expression to be TRUE
console.log(true && false) // FALSE
console.log(false && true) // FALSE
console.log(false && false) // FALSE

// "OR" - any value can be true for expression to be TRUE
console.log(true || false) // any value has to be true for expression to be TRUE
console.log(true || false) // TRUE
console.log(false || true) // TRUE
console.log(false || false) // FALSE

var ageMoreThanEighteen = true
var isUSCitizen = true

var elegibleForDriversLicense = ageMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: ' + elegibleForDriversLicense)

var ageMoreThanEighteen = true
var isUSCitizen = false

var elegibleForDriversLicense = ageMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + elegibleForDriversLicense)

// logical "NOT"
console.log(!true) // false
console.log(6 !== 10) // true

