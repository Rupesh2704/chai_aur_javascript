function mul5(num) {
    return num * 5;
}

console.log(mul5(10))

// Setting value like Object
mul5.power = 2;
console.log(mul5.power)
console.log(mul5.prototype)


// New Function
function createUser(username , score){
    this.username = username;
}