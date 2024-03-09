const user = {
    username : "Rajveer",
    age : 20 ,
    welcomemessage : function(username){
        console.log(`${this.username} welcome to this console .`);
        // console.log(this);
    }
}

// this is used to give context  

// user.welcomemessage()
user.username="Raunak"
// user.welcomemessage("Will not affect ")

// console.log(this);  // returns an empty object ( {} ) here but in console of a web browser returns the window object 


function chai(){
    let username = "Rajveer"
    console.log(this.username);   // undefined as output
    console.log(this);   // bohot kuch as output
}
// chai()

const coffee = () => {            // ARROW FUNCTION
    let username = "Rajveer"
    console.log(this.username);  // undefined
    console.log(this);    // empty object ( {} )
}

// coffee()

// types of arrow function declaration 

const addTwo1 = (num1,num2) => {
    return num1 + num2
}
const addTwo2 = (num1,num2) => num1 + num2      // known as implicit returns
const addTwo3 = (num1,num2) => (num1 + num2)    // basically jab {} ho to return lagega varna nahi lagega. 
const addTwo4 = (num1,num2) => ({username : "Rajveer"})

console.log(addTwo1(1,2));
console.log(addTwo2(1,2));
console.log(addTwo3(1,2));
console.log(addTwo4(1,2));