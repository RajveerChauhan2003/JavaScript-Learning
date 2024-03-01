let name1 = "Rajveer"
let age = 20

//console.log(name1,age);
// console.log(name1+age);
// console.log(`Hello my name is ${name1} and my age is ${age}`);  // string interpolation  
// ` is called backtick

let string1 = new String('RaunakThakur') // has key value pairs as indices
// console.log(string1[0]);
// console.log(string1.__proto__);
// console.log(string1.toLowerCase());
// console.log(string1.length);

// charAt , indexOf .. and many more you can type a string into console and check for yourself under prototype option

// let string11 = string1.substring(0,6)
// let string12 = string1.slice(-11)

// console.log(string11);
// console.log(string12);

// let string2=string1
// string2="hacked"
// console.log(typeof string2);

let newString = "  Raj  veer  "
console.log(newString.trim());

let url = "https://rajveer.com/home%20thakur"
console.log(url.replace('%20','-'));
console.log(newString.includes('j  v'));

let newerString = "My-name-is-Rajveer"
console.log(newerString.split("-"));

