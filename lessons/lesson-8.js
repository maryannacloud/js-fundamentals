// declarative functions
// decl funs can be called above the function declaration
helloOne()
function helloOne(){
    console.log('Hello one!')
}

// anonymous function - function without a name
// in order for this function to work, the result of the fun needs to be assigned to the var
// anon fun cannot be called above the function declaration
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

// es6 function or an "arrow" function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

// function with arguments
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}

printName('John', 'Smith')

// function with return
// we can keep our functions in one file and call them from a different file
function multiplyByTwo(number) {
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(5)
console.log(myResult)