// Arrays

const myArr = [0, 1, 2, 3, 4, 5]

// const myHeroes = ["Shaktiman", "Hanuman"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]); //0
// console.log(myArr2[0]); //1

// //Array Methods

// myArr.push(6)
// console.log(myArr); // 0 ,1 , 2,3, 4, 5, 6
// myArr.push(7)
// console.log(myArr); // 0 ,1 , 2,3, 4, 5, 6 , 7

// myArr.pop()
// console.log(myArr); // 0 ,1 , 2, 3, 4, 5, 6

// myArr.unshift(9)

// console.log(myArr); //9 , 0 , 1 , 2, 3, 4, 5, 6 -> it will add 9 at the start of an array and all the already existing elements in the array will be shifted by 1

// myArr.shift()

// console.log(myArr); // 0 , 1 , 2, 3, 4, 5 , 6 -> it will remove the first element

// console.log(myArr.includes(9)); // false -> it will give output in boolean

// console.log(myArr.indexOf(9)); // -1 --> 9 does not exist in an array

// console.log(typeof myArr); //object


// const newArr = myArr.join()

// console.log(myArr); // [0, 1, 2, 3, 4, 5]

// console.log(newArr); // 0 , 1, 2 , 3, 4, 5

// console.log(typeof newArr); // string ---> join binded up our array and changed its datatype into string

//Slice Splice

console.log("A " , myArr); // A [0 , 1, 2, 3, 4, 5]

const mynewArr1 = myArr.slice(1 , 3) //it will take ele on index 1 , 2 and ele at index 3 will not be included

console.log(mynewArr1);

console.log("B ",myArr);


const mynewArr2 = myArr.splice(1 , 3) // IMPORTANT --- splice includes the range and it manipulates the original array
console.log("C ", myArr); // C [0 , 4 ,5]
console.log(mynewArr2); // [1 , 2, 3]

/*NOTE- Splice operation manipulate the original array. 
Slice operation does not manipulate the original array. */














