const marvel_heroes = ["Thor" , "Ironman" , "Spiderman"]

const dc_heroes = ["hanuman" , "Flash" , "Batman"]

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes); // [ 'Thor', 'Ironman', 'Spiderman', [ 'hanuman', 'Flash', 'Batman' ] ]

//console.log(marvel_heroes[3][1]); // Flash

//console.log(typeof marvel_heroes);


const allheroes = marvel_heroes.concat(dc_heroes)

console.log(allheroes); // [ 'Thor', 'Ironman', 'Spiderman', 'hanuman', 'Flash', 'Batman' ]

//NOTE - Concat does not change the existing array, push change the existing array.

//spread operator to concat more than 2 values or arrays

const all_new_heroes = [...marvel_heroes , ...dc_heroes]

console.log(all_new_heroes); //[ 'Thor', 'Ironman', 'Spiderman', 'hanuman', 'Flash', 'Batman' ]

const another_array = [1 ,2 , 3 ,[4 ,5 , 6] , [6 ,7 ,[2 , 3]]]

//const real_another_array = another_array.flat(Infinity)

//console.log(real_another_array); // [1 , 2, 3, 4 , 5, 6 , 6 ,7 , 2 ,3]

const real_another_array = another_array.flat(1)
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 6, 7, [ 2, 3 ] ]

console.log(Array.isArray('Akrati')); //false -> its not an array hence, false

console.log(Array.from('Akrati')); // [ 'A', 'k', 'r', 'a', 't', 'i' ] --> Array.from converted the string into array object

console.log(Array.from({name : "Akrati"})); // [] --> empty array because not able to convert 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3)); //[ 100, 200, 300 ] -->Array.of function convert the ele into array




