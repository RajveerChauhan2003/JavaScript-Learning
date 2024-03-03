// Arrays 

// Resizable , Can store mixed data types , Copy array creates shallow copy

// shallow copy --> creates copy with same reference
// deep copy --> creates copy with different reference

const myArr1 = [1,2,3,4,"hello"]
const myArr2 = new Array(1,2,3,4,5);

// console.log(myArr1);
// console.log(myArr2);

// myArr2.push(6)  // add at last
// console.log(myArr2);
// myArr2.push(69)
// console.log(myArr2);
// myArr2.pop()   // remove from last 
// console.log(myArr2);

// myArr2.unshift('first')     // adds at first 
// console.log(myArr2);
// myArr2.shift()              // removes from first
// console.log(myArr2);

// includes, index of methods.

// const myArr3 = myArr2.join()
// console.log(myArr3,typeof myArr3,myArr2);


// slice(does not include range and does not manipulate org array) and splice(manipulated org arrray and includes range)

const A = [0,1,2,3,4,5]
console.log("A ",A);
const arr1 = A.slice(1,3)
console.log(arr1);
console.log("A ",A);
const arr2 = A.splice(1,3)
console.log(arr2);
console.log("A ",A);



