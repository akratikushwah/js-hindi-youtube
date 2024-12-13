//Immediately Invoked function expression

(function chai(){
    //named IIFE
    console.log('DB connected');
    
})(); // ; semi-colon is important

// DB connected


(  (name) => {

    //Unnamed IIFE
        console.log('DB connected two');
        
    })('Akrati')

// DB connected two