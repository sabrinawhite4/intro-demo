const readline = require('readline');

// creating variables

const myFirstName = ' Sabrina' ;
let myAge = 23;

// console.log(' My name is ' + myFirstName + ' and I am ' + myAge)
// console.log(` My name is ${myFirstName} and I am ${myAge}`) 
// console.log( myFirstName , myAge )

const isCool = true;

let myHeight = null; // null
let myWeight; // undefined

// NUMBERS

let num1 = 7;
let num2 = 10;
let num3 = 6 + 45;
let num4 = num1 + num2;

// GETTING USER INPUT
const reader = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

reader.question( "Enter a number to find out if it is odd or even:", function(number){
    if (number % 2 === 0) {
    
        console.lig('Even!')
    } else {
        console.log('Odd!')
    }
});