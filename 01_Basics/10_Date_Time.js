// // dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,3)
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date(2023,0,3,15,3)
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate3 = new Date("2023-01-02")
let myCreatedDate3 = new Date("08-14-2023")  // mmddyyyy or yyyymmdd
// console.log(myCreatedDate3.toLocaleString());


// when we design polls , quizzes in js we find out who answered first so we use timestamps

let myTimeStamp = Date.now()
console.log(myTimeStamp);    // time passed in ms since Jan 1 1970 UTC 00:00:00
console.log(myCreatedDate3.getTime());  // same as Date.now() for your date
