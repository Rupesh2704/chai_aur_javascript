// SingleTon  -->when object created using Constructor then this form of objected created but using literal this dont get created 


// --> this type is created using constructor , issme he singleTon banta hai 
// Object.create

// Object literals --Also made and object 

// This above two terms create object there is no such difference but the difference bwt them is singleton



// **************Symbol**************
// Take one symbol and add that symbol into the object key and print it 
const mysumbol = Symbol("key1")  // mai ek symbol key hu 



// Always strore key : value pair
const jsuser = {
    name: "Rupesh",
    age: 19,
    location: "Vellore",
    [mysumbol]: "myKey1",   // this is the syntax of taking hte symbol 
    email: "rupesh.dahibhate@google.com",
    isLog: false
};

// console.log(jsuser);

// console.log(jsuser.email)


// Why this type of access 
// by default your jsUser key is always treat as String but if you give String by yourself , then there is no chance to access that key using dot operator
// console.log(jsuser["email"])s

// console.log(typeof jsuser[mysumbol])


// ****************Some basic operations************************************

// Object.freeze(jsuser)
jsuser.email = "rupesh@mail.com"
// console.log(jsuser)  // yaha par pura object freez hota hai isske baad koye bhi change karoge to error to nhi aayega par reflect bhi nhi hoga 



// ***********Functions**********************
jsuser.greeting = function () {
    console.log("Hello man !")
}


// console.log(jsuser.greeting)   // [Function (anonymous)]
console.log(jsuser.greeting())    // Hello man !  (required ouptut)




jsuser.greetingTwo = function () {
    console.log(`hello js master ${this.name} you are great coder at the age of ${this.age} from ${this.location} our organization proude to have you onboard`)
}
console.log(jsuser.greetingTwo())