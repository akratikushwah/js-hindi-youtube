const tinderUser = new Object() // singleton object  {}

//const tinderUser = {} // non-singleton object {}

console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Anjali"
tinderUser.isLoggedIn = false

console.log(tinderUser); //{ id: '123abc', name: 'Anjali', isLoggedIn: false }

const regularUser = {
    email:"amityadav@gmail.com",
        fullname : {
            userfullname:{
                firstname : "Akrati",
                lastname : "Kushwah"
            }
        }
}

console.log(regularUser); // { email: 'amityadav@gmail.com' , fullname: { userfullname : {firstname : 'Akrati' , lastname: 'Kushwah'}}}

console.log(regularUser.fullname); // { userfullname: { firstname: 'Akrati', lastname: 'Kushwah' } }

console.log(regularUser.fullname.userfullname.lastname); // Kushwah

const obj1 = {1 : "a" , 2: "b"}
const obj2 = {3: "c" , 4 : "d"}

const obj3 = Object.assign({} , obj1 , obj2) // targeted object is {} ,,, values of obj1 & obj2 is assigned to {}
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = {...obj1 , ...obj2} //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id : 1,
        email : "Akrati.kushwah@gmail.com"
    } , 
    {
        id : 1,
        email : "Akrati.kushwah@gmail.com"
    } ,
    {
        id : 1,
        email : "Akrati.kushwah@gmail.com"
    }, 
    {
        id : 1,
        email : "Akrati.kushwah@gmail.com"
    }
]

console.log(users[1].email) //Akrati.kushwah@gmail.com
console.log(tinderUser); //{ id: '123abc', name: 'Anjali', isLoggedIn: false }

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'Anjali', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Anjali' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true




