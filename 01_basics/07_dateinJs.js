//Dates

let myDate = new Date()
// console.log(myDate); // 2024-11-11T17:56:14.351Z

// console.log(myDate.toString()); // Mon Nov 11 2024 17:56:43 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); // Mon Nov 11 2024 

// console.log(myDate.toLocaleString()); // 11/11/2024, 5:58:53 PM

// console.log(myDate.getFullYear()); // 2024

// console.log(typeof myDate); // Object

let myCreatedDate = new Date(2023 , 0 , 23 , 5, 3)

// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

// console.log(myCreatedDate.toLocaleString()); //1/23/2023, 5:03:00 AM

let myCreatedDate1 = new Date("2023-01-12") 

// console.log(myCreatedDate1.toDateString()); // Thu Jan 12 2023

// console.log(myCreatedDate1.toLocaleString()); 1/12/2023, 12:00:00 AM

let myTimeStamp = Date.now()

console.log(myTimeStamp); // mili secs
console.log(myCreatedDate1.getTime()); // mili secs

console.log(Math.floor(Date.now()/1000));// current time in secs

let newDate = new Date();
console.log(newDate); // 2024-11-12T17:27:56.790Z
console.log(newDate.getMonth()); // 10 -> November // months starts from 0 in this function
console.log(newDate.getMonth() + 1); // 11 -> November


console.log(newDate.getDay()); //2

newDate.toLocaleString('default' , {
    weekday : "long"
})

