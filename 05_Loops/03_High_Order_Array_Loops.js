// // for of  : basically outputs the values

// const arr = [1,2,3,4,5]

// for(const i of arr ){
//     // console.log(i);
// }

// const greeting = "Hello World"

// for (const greet of greeting) {
//     // console.log(greet);
// }

// // Maps

// const map = new Map()

// map.set('IN','India')
// map.set('USA','United States of America')
// map.set('AUS','Australia')

// // console.log(map);

// for (const [key,value] of map) {      // destructured the array that was coming from        accessing map's elements
//     // console.log(key," : ",value);
// }


// //  for of --> cant be used on objects ( gives : not iterable error )

// // for in : basically outputs the keys 

// const myObject = {
//     js : "JavaScript",
//     cpp : "C++",
//     java : "Java"
// }

// for (const key in myObject) {
// //    console.log(key);
// //    console.log(myObject[key]);
// }

// // array pe lagaoge to uske indices output pe aayenge

// // for in does not work on maps as it is not iterable


// // for each loop 

const coding = ["js","ruby","c++","python"]

coding.forEach(function (item){    // function inside is a callback function 
console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})

function printme(item){
    console.log(item);
}

coding.forEach(printme)

coding.forEach( (item,index,array) => {   // itni cheezein milti hai
    console.log(item,index,array);
})


