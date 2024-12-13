const user = {
    username : "Akrati",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
        /*Akrati , welcome to website
        {
          username: 'Akrati',
          price: 999,
          welcomeMessage: [Function: welcomeMessage]
        }
        Amit , welcome to website
        {
          username: 'Amit',
          price: 999,
          welcomeMessage: [Function: welcomeMessage]
        } */
        
        
    }

}

user.welcomeMessage(); //Akrati , welcome to website
user.username = "Amit"
user.welcomeMessage(); //Amit , welcome to website

// console.log(this); //{}

// function chai(){
//     let username = "Akrati"
//     console.log(this.username); //undefined
    
// }

// chai()

// const chai1 = function(){
//     let username = "Akrati"
//     console.log(this.username); //undefined
// }
// chai1()

// +++ARROW FUNCTION+++
const chai = () => {
    let username = "Akrati"
    console.log(this.username);//undefined
    console.log(this); // {}
    
    
}

chai()

// const addTwo = (num1 , num2) =>{
//     return num1 + num2
// }

// console.log(addTwo(3 , 4)); //7

// Implicit return

//const addTwo = (num1 , num2) => num1 + num2

//const addTwo = ( num1 , num2 ) => ( num1 + num2 )

const addTwo = (num1 , num2 ) => ( {username : "Amit"} ) //{ username: 'Amit' }
console.log(addTwo(2 , 6)); // 8



