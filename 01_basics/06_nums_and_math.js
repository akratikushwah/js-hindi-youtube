const score = 400
//console.log(score); // 400 --> it will directly give the output without telling the type of variable

const balance = new Number(100)
// console.log(balance); // [Number: 100] --> it will specifically tell that the variable balance is of number type and give its value

// console.log(balance.toString().length); //3

// console.log(balance.toFixed(2)); // 100.00

// console.log(typeof balance.toString()); // string

//console.log(typeof balance) // object


const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(2)); //24

// console.log(typeof otherNumber.toPrecision(2)); //string

const hundreds = 1000000

//console.log(hundreds.toLocaleString('en-IN')); //10,00,000

// ++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++

// console.log(Math); // Object [Math] {}

// console.log(Math.abs(-4)); //4 -> absolute value of -4
// console.log(Math.round(4.7)); //5
// console.log(Math.ceil(4.2)); // 5 --> ek dum upar wali value
// console.log(Math.floor(4.6)); //4 --> ek dum neeche wali value
// console.log(Math.min(2,3,4,8)); //2
// console.log(Math.max(2 , 3, 4, 5)); //5

// console.log(Math.random()); // op- value between 0 to 1 --> different output each time you run the program //0.6905612675308397
// console.log((Math.random()*10) + 1); //9.731351439540363 so that the value comes in between 0 to 10

console.log((Math.floor(Math.random()*10)) + 1); //7 --> floor will round of it to the lowest digit

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //12




















