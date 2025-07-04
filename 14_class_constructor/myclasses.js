// // ES6 baad ke kahane

// class User {
//     // Constructor called at the time of Object creation (new keyword)
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptpass() {
//         return `${this.password}abc`
//     }

//     convertTOupperCaseUsername() {
//         return `${this.username.toUpperCase()}`

//     }
// }

// const chai = new User("chai", "rupesh@gmail.com", "123")
// console.log(chai.encryptpass())
// console.log(chai.convertTOupperCaseUsername())















// Behing the scean
function user(username, email, password) {
    this.username = username
    this.email = email
    this.password = password

}

user.prototype.encryptPassword2 = function () {
    return `${this.password}abndef`
}

user.prototype.changeUsername2 = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new user("Rupesh", "chai@gmail.com", "12345")
console.log(tea)
console.log(tea.encryptPassword2())
console.log(tea.changeUsername2())