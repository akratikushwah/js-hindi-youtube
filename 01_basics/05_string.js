const name = "Akrati"

const repoCount = '101'

console.log(`hello! My name is ${name} and my repo count is ${repoCount}.`); //hello! My name is Akrati and my repo count is 101.

const gameName = new String("Squid Game")

// console.log(gameName[0]); //S

// console.log(gameName.__proto__); //{} ==> Object -- prototype

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2)); //character at position 2 i.e, u

// console.log(gameName.indexOf('q')); // index of q is 1

const newString = gameName.substring(0,4) //last index does not get included 

console.log(newString); // --- Squi

const anotherString = gameName.slice(-8 , 4)

console.log(anotherString) // ui

const newStringOne = "    Akrati    "

console.log(newStringOne); //"    Akrati    "
console.log(newStringOne.trim()); //"Akrati" --- removed extra spaces

const url = "http://localhost:Akrati%20kushwah"

console.log(url.replace('%20', ' ')); // replace function will replace '%20' to ' '

console.log(url.includes("Akrati")); // it will tell whether the url contain word Akrati or not ---> true

const gameName1 = new String("Akrati-Kushwah-SDE")

console.log(gameName1.split('-'));// strings will split on the basis of '-' //[ 'Akrati', 'Kushwah', 'SDE' ]


