class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`)
    }

    static createId() {
        return `123`
    }
}

const hitech = new User("Hitech")
// console.log(hitech.createId())


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Prachi" , "prachi@gmail.com")
iphone.logMe()
console.log(iphone.createId())