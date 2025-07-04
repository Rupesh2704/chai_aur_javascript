// Creating the Object literal with properties 
const user = {
    // All properties
    username: "Ruepesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got details")
    }
}

console.log(user.username);
console.log(user.getUserDetails())