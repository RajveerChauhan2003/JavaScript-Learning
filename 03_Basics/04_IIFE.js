// IIFE -> Immediately Invoked Function Expression

// used to save functions from global scope pollution .

(function chai(){
    console.log("Named IIFE ");
})();           // semi colon is required here

((name) => {
    console.log(`Arrow function and parameterised IIFE ${name}`);
})('Rajveer');