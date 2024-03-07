// singleton when we use contructor to create objects : Object.create()  otherwise not 


//object literal method : 
const mySymbol = Symbol("Key1")
const myObj = {
    name:"Rajveer",
    age:20,
    "hometown":"Jhansi",
    [mySymbol]:"ThisIsKey1",
    greetingTwo:function(){
        console.log(`Namaste, ${this.name}`);
    }
}

// console.log(myObj);
// console.log(myObj.name);
// // console.log(myObj."hometown");  // error
// console.log(myObj["hometown"]);
// console.log(myObj[mySymbol]);
// console.log(myObj["age"]);   // another way to access objects

// Object.freeze(myObj) // now modifications cant be made

myObj.greeting = function(){
    console.log(`Heloo thereee, ${this.name}`);  // this : to reference same object 
}
myObj.umar="bees"
console.log(myObj.greeting());
console.log(myObj.greetingTwo());
console.log(myObj.umar);