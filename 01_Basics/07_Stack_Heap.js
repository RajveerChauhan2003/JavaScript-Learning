// Stack Memory is for primitive data types
// Heap Memory is for non-primitive data types

let name1 = "Rajveer"
let name2 = name1
name2 = "Raunak"

// console.log(name1);  // Rajveer
// console.log(name2);  // Raunak

// here in name2 a copy of name1 was passed and not reference to original name1 so upon changing name2 no changes were reflected upon name1.

let user1={
    age : 20,
    year : 3
}
let user2 = user1

user2.age=100
user2.year=100

console.log(user1);
console.log(user2);

// here in user2 , a direct reference to user1 was given so basically both user1 and user2 are pointing to the same memory space in the heap so any changes in user2 will be reflected upon user1 also.