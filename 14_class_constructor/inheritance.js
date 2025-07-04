class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)  // this super keyword will see which class is getting extends and go there and take the username and i will apply this keyword automatically
        this.email = email
        this.password = password
    }

    addCourses(coursename) {
        console.log(`new course added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "Chai@gmail.com", "123")
console.log(chai)
chai.addCourses("RUpesh")

// create new object masal chai
const masalaChai = new User("malasaChai")
masalaChai.logMe()


// 
console.log(chai===masalaChai)  // false
// chai is the instance of teacher 
console.log(chai instanceof Teacher)  // false