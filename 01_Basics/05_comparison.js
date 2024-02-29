// console.log(2 < 5);
// console.log(2 == 5);
// console.log(2 > 5);
// console.log(2 <= 5);
// console.log(2 >= 5);
// console.log(2 != 5);

// console.log("2" > 5)
// console.log("2" > "5")
// console.log(2 > "5")

// console.log(null > 0);      // false
// console.log(null == 0);     // false
// console.log(null < 0);      // false
// console.log(null <= 0);     // true
// console.log(null >= 0);     // true

// this is because an equality check (==) and comparisons (>,<,>=,<=) work differently
// Comparisons convert null to a number , treating it as 0 that is why null>0 is false and null>=0 is true

// "===" --> strict check : checks for datatype as well as value

// console.log("2"==2);  // true
// console.log("2"===2); // false (strict check)

let a = "Rajveer"
let b = a
let c = "Rajveer"

// console.log(a==b);  // true
// console.log(a==c);  // true
// console.log(b==c);  // true

