// array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);


// Arrays ---> TYPE = Object
// Arrays are the type of object 
// Js arrays are re-sizable
// mixed type of array(datatype) can be possible
// const myArr = [0 , 1 , 2 , 3 , 4 ];
// console.log(myArr);

// When we make a copy of array in javascrip then it follow *Shallow copy*
// What is shallow copy --> then changes we are made can we seen 
// Whhat is deep copy --> The changes we madhe that are in-visible

// A shallow copy creates a new object but copies references of nested objects, meaning changes in nested objects affect both copies.
// A deep copy creates a completely independent copy, including nested objects, so changes in one do not affect the other.


const myArr = [0, 1, 2, 3, 4];
// Methods
myArr.push(6)
console.log(myArr)
myArr.pop();
console.log(myArr);
myArr.unshift(100);
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(0))
console.log(myArr.indexOf(196))  // no exist return -1

// Want to change the type of the array ( object to string)
// take help of  -------> Join
// const newarr = myArr.join();
// console.log(myArr)
// console.log(typeof myArr)
// console.log(newarr)
// console.log(typeof newarr)

// slice and splice
console.log("A", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1)  // return the part of the arrray
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C", myArr)


// A [ 0, 1, 2, 3, 4 ]   --> Original array
// [ 1, 2 ]              --> Array after slice (we got an part of an array)
// B [ 0, 1, 2, 3, 4 ]   --> The original array was not affected
// [ 1, 2, 3 ]           --> Array after splice(we got an part of array include last digit also)
// C [ 0, 4 ]            --> The original Array got afffected , the element we got in splice are remove from the original array

// So when we do slice original array is not get manupilated but while doing splice the original array got manupilated