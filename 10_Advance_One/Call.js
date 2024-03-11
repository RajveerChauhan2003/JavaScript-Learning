function setUserName(username){
    this.username = username 
    console.log("called")
}
function createUser(username , email, pass){
    // setUserName(username)   // this will not work as the execution context will be over when the function exits call stack and hence the values will be lost . So we pass our context using this and .call()
    setUserName.call(this,username)
    this.email=email     // this bole to jaha se funtion call hua hai
    this.pass=pass
}

// this here means saari values user1 me jaani hai .

const user1 = new createUser("Rajveer","abc@example.com","123")
console.log(user1)