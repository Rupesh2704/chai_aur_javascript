// creating new object of promise
// Previously js dont have promises we have to install library like BLUEBIRD to integrate promise
// promise created
const promise = new Promise(function (resolve, reject) {
    // Do async task
    // DB call , Cryptography , network call

    setTimeout(function () {
        console.log(`Async taks completed`)
        resolve()

    }, 1000)
});


// We have to consume the promise
// .then() is directly connected with resolve
promise.then(function () {  // here we get a call back 
    console.log("Promise consumed ")
})

// Another way to declere promise 
new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("Async task completed seocnd time")
        resolve()

    }, 1000)
}).then(function () {
    console.log("Promise consumed 2 time")
})

// Third promise
const promise3 = new Promise(function (resolve, reject) {

    setTimeout(function () {
        // can transfer data from here to then method 
        resolve({ username: "Rupesh", email: "rupeshdahibhate@gmil.com" })

    }, 1000)
})

promise3.then(function (user) {
    // console.log(user)
})



// Fourth promise

const promise4 = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ userName: "Rupesh", pass: "12345" })

        } else {
            reject("Something went Wrong")
        }
    }, 1000)
})

// Chaining of promises 
promise4.then((user) => {
    // console.log(user)
    return user.userName
}).then((userName) => {
    console.log(userName)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Thank You see you again ")
})

// promise 5 
const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ userName: "JS", pass: "12345" })

        } else {
            reject("JavaScript went Wrong")
        }
    }, 1000)

})

async function consumefivePromise() {
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumefivePromise();


// async await

// async function getAllUser() {
//     try {
//         const response = await fetch('https://randomuser.me/api/')
//         const data = await response.json()
//         console.log(data)
//     } catch (e) {
//         console.log(e)
//     }
// }
// getAllUser()

// Above same format in .then() format 

fetch('https://randomuser.me/api/')
    .then((response) => {
        return response.json()

    }).then((data) => {
        console.log(data)
    })
    .catch((e) => { console.log(e) })
