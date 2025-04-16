// Hoisting is the js behavious where function call is move to top before the function initilization

// This type of things totally depends on the type of function decelaration 

console.log(addTwoNum( 10 , 10))
function addTwoNum(a , b){
    return a+b
}




console.log(addtwonum(5,5))

const addtwonum = function ( a , b){
    return a +b
}


