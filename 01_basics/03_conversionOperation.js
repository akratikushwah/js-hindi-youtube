let score = "33abc" // Nan -> not a number

//console.log(typeof score)

//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// 33 => Number
// "33abc" => Nan
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn)

// 1 => true; 0 =>false
//" " => false
// "Akrati" => true

let someNumber = 34

let stringNumber = String(someNumber)

//console.log(typeof stringNumber);


// ******************************** Operations ***************************

let value = 3

let negValue = -value

//console.log(negValue);

let str1 = "Hello"
let str2 = " Akrati"

let str3 = str1 + str2

console.log(str3); //Hello Akrati

console.log('1' + 3); //13

console.log("2" + "4");//24

console.log("1" + 2 + 2) //122

console.log(1 + 2 + "2")//32

console.log(true + 3);//4

console.log(+true)//1

console.log(+"")//0

let gameCounter = 100
gameCounter++
console.log(gameCounter);//101
++gameCounter
console.log(gameCounter) //102




