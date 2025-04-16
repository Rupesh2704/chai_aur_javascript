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
// again_print() // this is called function call


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

// console.log(login_user_msg("Rupesh"))
// console.log(login_user_msg()) // when you dont pass the value then system bydefault take it as UNDEFINED 




// Lets talk about SHOPPING CART
// Till now are are giving defined parameter , but when user add items into shopping kart , we dont how many items the user is going to add , so for that learn below 

// One common confusion 
// ... restOperator
// ... SpreadOperator

// ? innke use-case par innko use keya jata hai 

function calculateCartPrice(...num1) {

    return num1

}

// console.log(calculateCartPrice(100, 200, 300));
// This all values will automatically get added into the arrays
// [ 100, 200, 300 ]


function calculateCartPrice(val1, val2, ...num1) {

    return num1

}
// [ 100, 200, 300, 400 ,500 ]
// val1 = 100
// val2 = 200
// ...num1 = [300 , 400 ,500]


// ***********************************

const user = {
    name: "Rupesh",
    price: 499
}

function handelObject(anyObject) {
    console.log(`the user name is ${anyObject.name} and the price is ${anyObject.price}`)
}

// handelObject(user);
handelObject({
    name :"Prachi",
    price :599
})


const arr = [200 , 400 , 500 , 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(arr))
console.log(returnSecondValue([100 ,200 ,300]))
