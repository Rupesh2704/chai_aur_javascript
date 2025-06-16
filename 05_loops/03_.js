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
    js : "JavaScript",
    R : "R lang"
}

console.log(myObj)

for(const [key , value] of myObj){
    console.log(key + " + " , value)
}

// Note --> Maps are iteratable and Objects are iteratable but by different things 