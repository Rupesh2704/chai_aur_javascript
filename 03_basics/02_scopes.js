// Global scope
let c = 100
// Block Scope 
{
    let a = 10
    const b = 20
    let c = 30
    // console.log("BLock Scope", c)
}

// console.log(a)
// console.log(b)
// console.log("Global Scope ", c)

// Note --> The global scope in our node terminal and the global scope in our website terminal (console (inspect)) BOTH are different 



// ****************************** NESTED SCOPE ***************************************
function one() {
    const name = "Rupesh"

    function two() {
        const website = "Youtube"
        // console.log(name)

    }
    // We can't able to access the website because its scope is over (Block Scope)
    // console.log(website)

    two() // second function called 
}

one()  // main function called 

// Only child class can be able to access the parent class variable , parent cannot take it form child 

// Small concept

if(true){
    const username = "Rupesh"

    if(username==="Rupesh"){
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website)  // out of block scope
}

// console.log(username) // Out of block scope






// ++++++++++++++++++++++++ Intesting Question +++++++++++++++++++++++++++++++++++
