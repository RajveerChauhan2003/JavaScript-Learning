const myArr1 = [1,2,3,4]
const myArr2 = [5,6,7,8]
// myArr2.push(myArr1)   // [ 5, 6, 7, 8, [ 1, 2, 3, 4 ] ]

// console.log(myArr1.concat(myArr2));

// spread operator

// console.log([...myArr1,...myArr2]);

const myArr3 = [1,2,3,[4,5,6],[7,[8,9]]]

console.log(myArr3.flat(3));   // parameter can also be set to infinity

console.log(Array.isArray("Rajveer"));
console.log(Array.from("Rajveer"));
console.log(Array.of(1,2,3));