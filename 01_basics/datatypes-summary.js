// Primitive -- call by value

// 7 types -- String , Number , null , BigInt, boolean , undefined ,  symbol

// Reference or Non- primitive

// Array , Objects , functions

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

/*
console.log(id == anotherId); // false
console.log(id); //Symbol(123)
console.log(anotherId); //Symbol(123)

*/
const bigNumber = 3387984655328748943n


const heroes = ["shaktiman" , "Hanumanji" , "Ganesha"]
let Obj = {
    name : "Akrati", 
    age : 22,
}


const myFunction = function(){
    console.log("Hello world!!");
}

/*
console.log(typeof bigNumber); //bigint

console.log(typeof Obj); //object

console.log(typeof myFunction); //function

console.log(typeof heroes); //object

*/

//*****************************************************************/

//Memory

//2 types

// Stack (for primitive datatypes)

// Heap (for non-primitive datatypes)

let myYoutubeName = "TheCorporateGirlVibes"

let anotherYoutubeName = myYoutubeName

anotherYoutubeName = "NaamHamaraRadhe"

console.log(myYoutubeName);
console.log(anotherYoutubeName);

let userOne ={
    email : "user@google.com",
    upi: "user@ybl"
}

let usertwo = userOne

usertwo.email = "akrati@google.com"

console.log(usertwo.email);
console.log(userOne.email);








