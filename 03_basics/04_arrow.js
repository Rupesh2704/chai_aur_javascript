const user = {
    username: "Rupesh",
    price: 999,

    welcomeMsg: function () {
        // console.log(`${this.username} , welcome to website`)
        console.log(this)  // this reer to current context 
    }
}

user.welcomeMsg()
user.username = "Prachi"
user.welcomeMsg()
// here you can abel to see changes , we didnt hardcode the value of name we said that , what ever the current context change it 
// context ka matlab hai simple values 

console.log(this)
// here you can able to see {} empty pranthesis bez there is no global object 
// But same thing if you do in BROWSER then the global object is WINDOW



// -------------------- ARROW FUNCTION ----------------------------------------------------
function one() {
    console.log(this)
    console.log(this.username)
}

one();


// Type 2 of decleration of function 
const chai = () => {
    console.log(this)

}
chai();


/*
Arrow function is a shorter way to write functions in JavaScript.
The main difference is that arrow functions do not have their own this, arguments, or constructor.
They inherit this from the parent scope, while normal functions get their own this based on how they are called.
 */

// Implecit return
const addtwo = (num1, num2) => num1 + num2;
// curly brasis mai wrap kar to retun ketyword likna padega samje 

// explicit matlab jab aap return keyword lagate ho 

// If you are trying to return the object then wrap it into () prenthesis

console.log(addtwo(1, 2))