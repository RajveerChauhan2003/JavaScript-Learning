// singleton objects ke baare me 

const tinderUser = Object.create({})
// const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="Rajveer"
tinderUser.age=20

// console.log(tinderUser);

const regularUser = {
    name:"Raunak",
    fullname:{
        firstName:"Rajveer",
        lastName:"Chauhan"
    }
}

// console.log(regularUser.fullname.firstName);
// console.log(regularUser.fullname?.firstName);     // optional chaining

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {obj1,obj2}
// const obj3 = {...obj1,...obj2}

// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//------------------------------ Object De-structuring -------------------------------------


// jisse baar baar object.datafield se datafield access na karni pade hume.

const course = {
    cName : "life",
    cFee : 999,
    cInstructor : "Rajveer"
}

const {cName : cn , cFee : cf} = course   // object de-structuring

console.log(cn);
console.log(cName);
console.log(cf);