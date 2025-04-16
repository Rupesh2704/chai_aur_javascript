// Global scope
let c = 100
// Block Scope 
{
    let a = 10
    const b = 20
    let c = 30
    console.log("BLock Scope" ,c)
}

// console.log(a)
// console.log(b)
console.log("Global Scope ",c)

// Note --> The global scope in our node terminal and the global scope in our website terminal (console (inspect)) BOTH are different 