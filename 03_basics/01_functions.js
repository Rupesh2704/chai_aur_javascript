// Function is the re-useable code that can be used again and again when you will call it 


// Function --> keyword
// again_print --> Function name 
function again_print() {


    // This is function defination
    console.log("R")
    console.log("U")
    console.log("P")
    console.log("E")
    console.log("S")
    console.log("H")

}
// Function call
// again_print // this is called function reference 
again_print() // this is called function call


// Creating the function that will add two numbers 
// function addTwoNumbers(a, b) {

//     if (typeof (a) === "number" && typeof (b) === "number") {
//         console.log(a + b)
//     } else {
//         console.log("Enter valid number")
//     }


// }

// ()  --> this is called parenthesis
// addTwoNumbers(3, null)


// Some important things --> when you write a function and inside function you are passing some variables then that are called arguments and when you calll the function and the value you pass indie it called parameter 


// function addname(a, b) {

//     return a + b;
// }

// console.log(addname(5 , 5))
// addname(5, 5)
// const res = addname(5 , 5);
// console.log(res)


// ****************************************************************************************************************

function login_user_msg(username) {
    // you can pass bydefault also to the functions  (username ="Rupesh")

    if (username === undefined) {
        console.log("Please enter your username")
        return
    }

    return `Welcome ${username} sir to our portral`

}

console.log(login_user_msg("Rupesh"))
console.log(login_user_msg()) // when you dont pass the value then system bydefault take it as UNDEFINED 