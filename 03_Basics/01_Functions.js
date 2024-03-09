function greetMe(){
    console.log("Hello");
    console.log(" ,I am Rajveer.");
}

// greetMe --> function reference
// greetMe() --> function execute

// greetMe();

// function addTwo(num1,num2){
//     return num1+num2
// }

// let result = addTwo(2,4)

// console.log(`Result : ${result}`);


function greetMe2(username="Raunak"){
    if(!username){  // or username === undefined
        console.log("Please enter a name");
        return
    }
    return `${username} just logged in`
}


// console.log("1 : ",greetMe2("Rajveer"));
// console.log("2 : ",greetMe2(""));
// console.log("3 : ",greetMe2());

function calculateCartPrice(...num1){       // here ... working as rest and not spread operator
    return num1
}

// console.log(calculateCartPrice(100,200,300,400));    // kitne bhi inputs de skte aise 

const user = {
    username : "Rajveer",
    price : 199
}

function toHandleObjects(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

toHandleObjects(user)
toHandleObjects({
    username : "Raunak",
    price : 999
})