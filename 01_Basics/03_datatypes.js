"use strict"; // trear all JS code as newer version 

/* as in older versions there were no arrown functions , classes etc */

// alert("Hello")  // agar browser me use karoge to alag functionality but abhi nhi aayegi.

/*
2 documentation for JS :
1.) mdn docs 
2.) ECMA DOCS  : tc39.es(URL) : basically standards are defined here 
*/

// datatypes

let first_name = "Rajveer"
let last_name = 'Chauhan'
let age = 20
let something = null ;
let random;


/*

primitve : 
number --> upto 2^53 || bigint
string --> with ""/''
null --> standalone value 
undefined --> undefined value  (abhi value assign nhi hui hai)
boolean --> true/false
symbol --> for uniqueness

non-primitive :
object --> instance of class
*/

console.log(typeof undefined); // undefined
console.log(typeof random); // undefined
console.log(typeof null); // object
console.log(typeof age); // number
console.log(typeof first_name); // string
console.log(typeof 123); // number


