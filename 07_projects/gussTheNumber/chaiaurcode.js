// Lets generate a random number
const Rnum = parseInt(Math.random() * 100 + 1);
// Submit btn
const SubmitBtn = document.getElementById('subt');
// User input ko select karte hai 
const input = document.querySelector('#guessField');
// prev guess
const prevGuss = document.querySelector('.guesses');
const Remain = document.querySelector('.lastResult');
const msg = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');


// array for storing prev values 
let prev = []
let numGuss = 1
let playgame = true