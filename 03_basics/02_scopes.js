// var = 300

let a = 300

if(true){
    let a = 10
    const b = 20
    //console.log("Inner : ", a);   
}

//console.log(a); //Inner :  10      300
//console.log(b);
//console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        //console.log(username);
        
    }
    //console.log(website)
    
    two()
}

one()

if(true){
    const username = "Akrati"

    if(username === "Akrati"){
        const website = "youtube"
        //console.log(username + website);//Akrati youtube
        
    }
   //console.log(website);
    
}

//console.log(username);

addone(5) // this is accessible because we have not declared function as variable here

function addone(num){
    return num + 1;
}




addtwo(5) //cannot access addtwo before initialization
const addtwo = function(num){
    return num + 2;
}









