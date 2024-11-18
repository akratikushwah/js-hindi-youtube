// Arrays

const myArr = [0, 1, 2, 3, 4, 5]

const myHeroes = ["Shaktiman", "Hanuman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]); //0
console.log(myArr2[0]); //1

//Array Methods

myArr.push(6)
console.log(myArr); // 0 ,1 , 2,3, 4, 5, 6
myArr.push(7)
console.log(myArr); // 0 ,1 , 2,3, 4, 5, 6 , 7

myArr.pop()
console.log(myArr); // 0 ,1 , 2, 3, 4, 5, 6

myArr.unshift(9)

console.log(myArr); //9 , 0 , 1 , 2, 3, 4, 5, 6 -> it will add 9 at the start of an array and all the already existing elements in the array will be shifted by 1

myArr.shift()

console.log(myArr); // 0 , 1 , 2, 3, 4, 5 , 6 -> it will remove the first element

console.log(myArr.includes(9)); // false -> it will give output in boolean

console.log(myArr.indexOf(9)); // -1 --> 9 does not exist in an array












