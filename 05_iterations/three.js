// for of

// ["" , "" , ""]
// [{} , {} , {}]

const arr = [1 ,2 , 3, 4, 5]

for (const num of arr) {
    //console.log(num); // 1 2 3 4 5
    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    //console.log(greet); // Hello World!
    
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // India will not get added to the map again because map is known for unique values


//console.log(map)
/* Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
} */

for (const [key , value] of map) {
    console.log(key , ':-' , value);    
    
}

/*
IN :- India
USA :- United States of America
Fr :- France */

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

console.log(myObject);
