// Promise object represents eventual completion ( or failure ) of an asynchronous operation and its resulting value

// const promiseOne = new Promise(function(resolve,reject){
//     // async tasks 
//     // DB Tasks , Network tasks ..
//     setTimeout(function(){
//         console.log("Async task1 is completed");
//         resolve()
//     },1000) 
// })

// promiseOne.then(function(){
//     console.log("Promise1 consumed")
// })


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task2 is completed")
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("Promise2 consumed")
// })

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Async task3 is completed")
//         resolve({username:"Rajveer",age:20})
//     }, 1000);
// })

// promiseThree.then((user)=>{
//     console.log(user)
// })


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if(error){
            console.log("Async task4 is not completed")
            reject("Error : Something went wrong !!")
        }
        else{
            console.log("Async task4 is completed")
            resolve({pehchaan:"Raunak",umar:20})
        }
        
    }, 1000);
})


// // avoiding callback hell 

promiseFour.then((user)=>{
    console.log(user)
    return user.pehchaan   // ye kisi variable me return nahi hoti infact ye agle .then() me jaati hai chaining ke liye .
}).then((dataItem)=>{
    console.log(dataItem)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})

// using async await :

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false 
        if(error){
            console.log("Task5 is not completed")
            reject("Error : Something went wrong")
        }
        else{
            console.log("Task5 is completed")
            resolve({username:"Rajveer",age:20})
        }
    })
})

async function consumePromiseFive(){
    try{
        let response = await promiseFive
        console.log(response.age)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }
// getAllUsers()


// fetch() --> returns a promise 

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    const data = response.json()
    return data
})
.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})