class user {
    constructor(email, pass) {
        this.email = email
        this.pass = pass
    }

    get pass() {
        return this._pass.toUpperCase();

    }

    set pass(password){
        this._pass = password
    }
}

const chai = new user("rupesh@gmail.com", "125acv")
console.log(chai.pass)