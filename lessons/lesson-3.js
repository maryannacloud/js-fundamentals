// Object
var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["volvo", "toyota", "tesla"]
}

console.log(customer)
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer['firstName'])
console.log(customer['lastName'])

// dot notation
customer.firstName = "Mike"

// bracket notation
customer["firstName"] = "Jake"

customer.lastName = "Silver"
customer["lastName"] = "Doe"

console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var cars = ["volvo", "toyota", "tesla"]
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])

cars[1] = "bmw"

console.log(cars[0])
console.log(cars[1])
console.log(cars[2])

console.log(customer.cars[0])