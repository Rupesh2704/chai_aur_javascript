// for of loop 

const arr = [1, 2, 3, 4, 5, 6]

for (const nums of arr) {
    // console.log(nums)

}
// No need to do increment and all just write for of loop 

const greet = "Hello Rupesh"

for (const i of greet) {
    // console.log(i)
}


// Maps 
// maps have unique values 
const map = new Map();
// Maps always store in the form of KEY VALUE pair 
// Maps are unique
map.set('IN', 'INDIA')
map.set('USA', 'AMERICA')

console.log(map)

// Here we are getting array 
for(const key of map){
    console.log(key)
}

// Now we will get key Value pair
for(const [key ,value] of map){
    console.log(key + " : " + value)
}


// Apply for of loop on Object 

const myObj = {
    R : "R lang",
    js : "JavaScript",
}

console.log(myObj)

for(const [key , value] of myObj){
    console.log(key + " + " , value)
}

// Note --> Maps are iteratable and Objects are iteratable but by different things 
// Bhai object ko For in loop se iterate kar sakte hai easily aut maps ko tu for of se kar sakta hai 