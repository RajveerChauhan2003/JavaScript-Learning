// DataTypes are classified on basis of how they are stored in memory and how we access them. (call by reference or call by value)

// Primitives
// 7 types : String, Number, BigInt, Boolean, Symbol, null, undefined

// const id1 = Symbol('123')
// const id2 = Symbol('123')

// console.log(id1===id2); // false

// Non-Primitives (Reference types)
// Array, Object, Function

// const heroes = [1,2,'Shaktiman']
// let myObject = {
//     myName : "Rajveer",
//     age : 20
// }
// let myFunction = function(){
//     console.log("Hello World!!");
// }
// console.log(typeof myObject);

// NOTE : Another distinction arises when considering value versus reference types – primitives are considered value types because each variable has its own copy of the value that exists in a specific location in memory; whereas nonprimitives are reference types whose variables refer to locations in memory that contain their respective values.

// JavaScript is dynamically typed, we dont need to define datatype.

// const bigNumber = 5n //defines it as big number
// console.log(typeof bigNumber);
