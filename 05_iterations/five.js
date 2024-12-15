const coding = ['js' , 'ruby' , 'cpp' , 'python' , 'javascript']

// coding.forEach( function (val) {
//     console.log(val); // js ruby cpp python javascript
// })

// coding.forEach( (item) =>{
//     console.log(item); // js ruby cpp python javascript
    
// })


// function printMe(item) {
//     console.log(item); // js ruby cpp python javascript
    
// }

// coding.forEach(printMe)

coding.forEach( (item , index , arr) =>{
    console.log(item , index , arr);
    
})
/*
js 0 [ 'js', 'ruby', 'cpp', 'python', 'javascript' ]
ruby 1 [ 'js', 'ruby', 'cpp', 'python', 'javascript' ]
cpp 2 [ 'js', 'ruby', 'cpp', 'python', 'javascript' ]
python 3 [ 'js', 'ruby', 'cpp', 'python', 'javascript' ]
javascript 4 [ 'js', 'ruby', 'cpp', 'python', 'javascript' ] */


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )