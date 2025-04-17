const user = {
    username: "Rupesh",
    age: 25,
    price: 999,

    welcomeMsg: function () {
        console.log(`${this.username} welcome to website `);
        console.log(this)

    }
    // this represent the current context
}

// user.welcomeMsg()
// user.username = "Prachi" // here you changed the value so our context changed
// user.welcomeMsg()
// console.log(this)

// Note --> if you printing js in Node enviroment , and you print (this) and if there is no global scope is defined then you will get empty {}

// Same thing you will print in chrome console then you will get window as an output 


// ********************************************************
// function rupesh(){
//     let name = "Rupesh Dahibhate"
//     // console.log(this)
//     console.log(this.name)  // OUTPUT --> undefined 
//     // You cannot use this in function 
// }
// rupesh();



// ************************Arrow Function*********

// const chai = function (){
//     let myname = "Rupesh"
//     console.log(this.myname)  // undefined  

// }
// chai()



// Arrow function does not support hoisting --> ReferenceError: Cannot access 'chai' before initialization
// Arrow Function 
// const chai = () => {
//     let myname = "Rupesh"
//     console.log(this.myname)  // undefined  
//     console.log(this) // empty praenthesis {}

// }


// ***************The real Story*********************

// Type 1  --> Explicit return
// const addtwonum = (num1, num2) => {
//     return num1 + num2

// }

// Type 2  --> Inplicit return 

// const addmynum = (num1 , num2) => (num1 + num2)


// Type 3 
const addmynum = (num1 , num2) => ({username :"Rupesh"})


console.log(addmynum(5, 5))

// {}  to return statement aayega aur () use hue to return statement nhi aayega 



// Summery 
// normal function have their our this 
// Arrwo function inherit the this from parent ( global scope ) thats why undefined

// Let and const variable dont support this keyword only var support