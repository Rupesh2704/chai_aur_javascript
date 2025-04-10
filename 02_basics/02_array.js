const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


// This flat function will return and concat the whole array , SpreadOut
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// Asking that is Hitesh is array or not (Arrays.isArray)
console.log(Array.isArray("Hitesh"))

// Converting Hitesh into Array Arrays.from()
console.log(Array.from("Hitesh"))

// This will return an *Empty Array* , Object are not iterable so .form() function will treate it as iterable object but wont abel to iterate across it so will return an Empty array
console.log(Array.from({name: "hitesh"})) // interesting




// Suppose this values 

let score1 = 100
let score2 = 200
let score3 = 300

// This will return the set of elements into a form of Arrays
console.log(Array.of(score1, score2, score3));



