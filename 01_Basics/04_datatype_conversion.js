// typeof can also be used as : console.log(typeof(age))

let age = "33"

let numAge = Number(age)
// console.log(typeof age);
// console.log(typeof numAge);
// console.log(numAge);

/*
'33' --> 33
'33abc' --> NaN (not a number)     typeof me show krega ki type is number but output will be this
undefined --> NaN
true --> 1  / false --> 0
null --> 0     // which is wrong as socho temp null matlab an=bhi temp available nhi but temp 0 has a meaning
*/

let isLoggedIn = undefined
let BoolIsLogedIn = Boolean(isLoggedIn)     // conversion takes place here

console.log(typeof isLoggedIn);
console.log(typeof BoolIsLogedIn);
console.log(BoolIsLogedIn);

/*
123,23,1..  --> true
0 --> false
'' / "" --> false
'er' / "er" ...   --> true
null --> false
undefined --> false
*/


let myId = undefined
let stringMyId = String(myId)

// console.log(typeof myId);
// console.log(typeof stringMyId);
// console.log(stringMyId);

/*
456 --> 456 (type string)
true --> true (type string)
false --> false (type string)
null --> null (type string)
undefined --> undefined (type string)
random string without quotes --> error
*/


// ****************************************** OPERATIONS **************************************************

let value = 3
let negValue = -value
// console.log(typeof(negValue));

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(-7%3)

let str1 = "Hello"
let str2 = " Rajveer"
let str3 = str1 + str2
// console.log(str3);

// console.log("1"+2)    // 12
// console.log(1+"2")    // 12
// console.log(1+1+"2")  // 22
// console.log("1"+1+2)  // 112

// console.log(3+5*4%3)  // dont write these kind of messy codes 

// console.log(+true)   // 1   // -true will give -1
// console.log(true+)  // error
// console.log(+false)  // 0   // -false will give -0
// console.log(+"p")    // NaN    // kyunki basically string number me convert nhi kar skte na 
// console.log(+"")     // 0
// console.log(+"22")     // 22    // here string can be converted into the number


let num1,num2,num3
num1=num2=num3=2
// console.log(num1++);    // prefix increment
// console.log(num1);
// console.log(++num2);    // postfix increment
// console.log(num3);
// console.log(num3+=9);

