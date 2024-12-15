const myObject = {
    js: 'Javascript', 
    py: 'Python',
    cpp : 'C++',
    rb: 'Ruby',
    swift : 'Swift by Apple'
}

for (const key in myObject) {
   //console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

/* js shortcut is for Javascript
py shortcut is for Python
cpp shortcut is for C++
rb shortcut is for Ruby
swift shortcut is for Swift by Apple */

const programming = ['py' , 'cpp' , 'rb' , 'js']

for (const key in programming) {
    console.log(programming[key]); // py cpp rb js
    console.log(key); // 0 1 2 3 
    
}

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//NOTE - map is non iterable so we cannot use for in loop

