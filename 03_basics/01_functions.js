function sayMyName(){
    console.log("A");
    console.log("k");
    console.log("r");
    console.log("a");
    console.log("t");
    console.log("i");    
}

//sayMyName() //sayMyName --- reference () --- execution
/*

output--
A
k
r
a
t
i
*/

// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2);
    
// }

// addTwoNumbers() //Nan

// addTwoNumbers(1 , 2) //3

// addTwoNumbers(1 , "4")  //14

// addTwoNumbers(3 , null) //3

function addTwoNumbers(num1 , num2){
    //let result = num1 + num2;
    //return result
    //Note - code after return statement is not reachable. Hence, it will not be executed
    //console.log("Akrati"); // This code will be reachable
    
    return num1 + num2
    //console.log("Akrati"); this code will not be reachable because its written after return
    
}

const result = addTwoNumbers(3 , 5)

//console.log("Result : " , result) //Result :  8

function loginUserMessage(username = "Ganga") //Ganga is default value of username
{

    if(username === undefined) // or we can write if(!username)
        { 
        console.log("Please enter a username"); //Please enter a username  
        return
    }
    return `${username} is just logged in`

}

loginUserMessage("Akrati") //no output

//console.log(loginUserMessage("Amit")); //Amit is just logged in

//console.log(loginUserMessage()) //undefined is just logged in -- we have not passed any argument hence, the function will retuen undefined

function calculateCartPrice(val1 , val2 , ...num1) //rest operator or spread operator ...
{
    return num1
}

console.log(calculateCartPrice(200 , 300 , 500 , 9000)); // [ 500 , 9000 ] ---output is array

const user = {
    username: "Hitesh",
    price: 99
}

function handleObject(anyObject){
    console.log(`username is  ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user) //username is  Hitesh and price is 99

handleObject({
    username: "Akrati" ,
    price : 900
})