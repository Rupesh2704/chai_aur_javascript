function setUsername(username) {
    // current username ko username kardo 
    this.username = username;
    console.log("called")
}


function createUser(username, email, password) {

    // setUsername(username)// here only reference is passed 
    setUsername.call(this , username) // here we are holiding its reference 
    // here we are using this because when this function called its context got pop out from stack and that whay we wont able to see this changes in our Object 
    // this.username = username
    this.email = email
    this.password = password
}


const chai = new createUser("Chai", "rupesh@gmail.com", "123")
console.log(chai)



