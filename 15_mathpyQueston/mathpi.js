// console.log(Math.PI)
const discriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(discriptor)


/**
 * {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
 */


const chai = {
    name: 'Masala Chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("Chai fat gaye ")
    }
}
// console.log(chai)
// console.log(Object.getOwnPropertyDescriptor(chai , "name"))

Object.defineProperty(chai, "name", {
    // writable : false,
    enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(chai , "name"))


for (let [key, value] of Object.entries(chai)) {

    if (typeof value !== 'function') {

        console.log(`key : ${key}  Value : ${value}`)
    }

}