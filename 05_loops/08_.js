// Reduce in js 
const num = [1, 2, 3]

// const mytotal = num.reduce(function (acc, currval) {
//     console.log(`acc value is ${acc} and currval is ${currval}`)
//     return acc + currval
// }, 0)
// console.log(mytotal)


// Lets write this with arrow function
// const mytotal = num.reduce((acc, currval) => {
//     console.log(`acc value is ${acc} and currval is ${currval}`)
//     return acc + currval

// }, 0)
// console.log(mytotal)



// Lets go for shopingkart values
const shopingKart = [
    {
        itemname: "banana",
        price: 6,

    },
    {
        itemname: "Orange",
        price: 60,

    },
    {
        itemname: "Apple",
        price: 100,

    },

]

const pricetopay = shopingKart.reduce(( acc , item)=>{
    return acc + item.price;

},0)


console.log(pricetopay)