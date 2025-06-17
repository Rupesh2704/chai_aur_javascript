// const coding = ['js', 'cpp', 'java', 'Ruby']

// // if you want to store the value of Array in some constant then is it possible 

// const value = coding.forEach( (item) => {

//     // console.log(item)
//     // ◘◘ ForEach function do not return any values ◘◘
//     return item
// })
// console.log(value)

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newnums = number.filter((num) => {
    return num > 5
})
// If you are opening scope then you have to return value else no need 
// console.log(newnums)

// If we store our filter() in variable we get an array 
// callback function is there



// ◘ Doing same thing using FOREACH 
// const newNum = []
// number.forEach((num) => {

//     if (num > 5) {
//         newNum.push(num)
//     }

// })
// console.log(newNum)

// ◘ Some more thing on FILTER
const books = [
    {
        title: "Atomic Habits",
        genre: "Self-help",
        publish: 2018,
        edition: "1st",
        author: "James Clear",
        price: 450,
        language: "English"
    },
    {
        title: "The Alchemist",
        genre: "Fiction",
        publish: 1988,
        edition: "2nd",
        author: "Paulo Coelho",
        price: 299,
        language: "English"
    },
    {
        title: "Wings of Fire",
        genre: "Autobiography",
        publish: 1999,
        edition: "3rd",
        author: "A.P.J. Abdul Kalam",
        price: 350,
        language: "English"
    },
    {
        title: "Think and Grow Rich",
        genre: "Motivational",
        publish: 1937,
        edition: "5th",
        author: "Napoleon Hill",
        price: 399,
        language: "English"
    },
    {
        title: "Ikigai",
        genre: "Philosophy",
        publish: 2016,
        edition: "1st",
        author: "Francesc Miralles",
        price: 320,
        language: "English"
    },
    {
        title: "Rich Dad Poor Dad",
        genre: "Finance",
        publish: 1997,
        edition: "4th",
        author: "Robert Kiyosaki",
        price: 370,
        language: "English"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        genre: "Fantasy",
        publish: 1997,
        edition: "1st",
        author: "J.K. Rowling",
        price: 499,
        language: "English"
    }
];


const userbooks = books.filter((b)=>b.publish>2010 && b.price>200 && b.author=="James Clear")

console.log(userbooks)
