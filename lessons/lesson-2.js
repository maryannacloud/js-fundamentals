// Concatenation and interpolation
var price = 80;
var itemName = "cup"
var messageToPrint1 = "The price for your " + itemName + " is " + price + " dollars."
console.log(messageToPrint1)

var messageToPrint2 = `The price for your ${itemName} is ${price} dollars`
console.log(messageToPrint2)
