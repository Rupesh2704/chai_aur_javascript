// Object sngleTon using constructor 

// SINGLETON OBJECT
const tinderuser = new Object();

// NON-SINGLETON OBJECT 
// const tinderUser = {}


tinderuser.id = "1234abc"
tinderuser.name = "RupaDarling"
tinderuser.isLog = false

// console.log(tinderuser)

// Now lets take Object into Object

const kukoFm = {
    name: "Prachi",
    email: "rupeshdhaibhate@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Rupesh",
            lastName: "Dhaibhate",
            school: {
                primarySchool: "Railway",
                secondarySchool: "Tapti",
                highSchool: "VIT UNIVERSITY",
            }
        }
    }
}

console.log(kukoFm.fullname.userFullname.school.primarySchool)

// How to combine objects 
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

const combine_obj = { ...obj1, ...obj2 }
console.log(combine_obj)

const combine_obj2 = Object.assign(obj1, obj2);
console.log(combine_obj2)

// How object.assign work
// assign(Target , Source)
// Sorce ka sara copy karo aur target mai dal to 
// target ke size change ho jate hai 
// **All properties of obj2 is copies to obj1**

// Obj1 change ho gaya --> same rakna hai 
// const combine = Object.assign({},obj1 , obj2)
//  ye combine mai saro ko daal dega 
// {} --> Act as TARGET and baki jo hai --> Act as SOURCE


// Interview Q --> Object.assign() is used to copy the properties form one or more source object to target object 

// Tu ...spread operator bhi use kar sakta hai 
// dono method js ke new aur clean systex wale hai 


// ********Some more important points*******

// part 1
const myhome = [


    {
        id: 1,
        name: "Home1"
    },
    {
        id: 2,
        name: "Home2"

    },
    {
        id: 3,
        name: "Home3"
    }
]


console.log(myhome[0].name)


// Part 2
// console.log(Object.keys(myhome));
// console.log(Object.values(myhome));

// console.log(Object.keys(tinderuser)) // this will return array and you can apply loops and maps
// console.log(Object.values(tinderuser)) // this also return array and you can appy loops and maps

// Part 3
console.log(Object.entries(tinderuser))  // array ke aander array milega , aander jo array hai vo bhi [key , valye ] pair mai hoga


// Part 4
// When you loop through the entire object and that value if not exist then code get crash 
console.log(tinderuser.hasOwnProperty("islog"))  // ky tere pad ye property hai         