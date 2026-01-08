// loops

console.log('Hello World')
console.log('Hello World')
console.log('Hello World')
console.log('Hello World')
console.log('Hello World')

// statement1 - initial statement, this is what we want to start our loop with
// statement2 - defines the condition of how long do we want to run our loop for and when we want to stop the loop
// stetement3 - what do we need to do after each cycle of the loop

// // for 'i' loop, or just 'for' loop
// for(statement1; statement2; statement3){
//     // execute code here
// }

for(let i=0; i<5; i++){
    console.log('Hello World' + ' - ' + i)
}

var cars = ["volvo", "toyota", "tesla"]
// for of loop
for (let car of cars){
    console.log(car)
    if (car == "toyota"){
        break
    }
}

// es6 syntax
cars.forEach(car => {
    console.log(car)
})