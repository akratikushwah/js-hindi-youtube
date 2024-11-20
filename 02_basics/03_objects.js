//singelton
//object.create

//object literals

const mySys = Symbol("key1")

const JsUser = {
    name : "Akrati",

    "full name" : "Akrati Kushwah",
    age : 22,
    location : "Noida",
    email : "akrati.kushwah1704@gmail.com",
    [mySys] : "myKey1",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Wednesday"]

}

// {} --> empty object

//console.log(JsUser.name); // Akrati
//console.log(JsUser["name"]); // Akrati

//console.log(JsUser["full name"]); // Akrati Kushwah

//console.log(JsUser[mySys]); //myKey1

JsUser.email = "akrati.kushwah@amazon.com"

//console.log(JsUser.email); //akrati.kushwah@amazon.com

//Object.freeze(JsUser) // values of JsUser will not be changed

JsUser.email = "akrati.kushwah@microsoft"

//console.log(JsUser.email); //akrati.kushwah@amazon.com

JsUser.greeting = function(){
    console.log("Hello Js user"); 
    
}

console.log(JsUser.greeting()); // Hello Js user undefined

console.log(JsUser.greeting); // [Function (anonymous)]

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
    
}

console.log(JsUser.greetingTwo()); // Hello Js User Akrati undefined








