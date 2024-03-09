let a = 10 // global scope
if (true) {
    let a =20 // local or block scope
}

// var ka scope ka scene nhi hota vo kahi bhi likho global ki tarah hi act karta hai 

addOne(5)   // this will execute 
function addOne(num){
    return num + 1
}


addTwo(5)    // this will not execute here add two was declared as a variable so hoisted up as undefined and not as a function declaration

const addTwo = function(num){    // this is an expression
    return num + 2
}


// hoisting : hoisting is the behaviour where the function and variable declarations are moved on top as if they were declared on top .