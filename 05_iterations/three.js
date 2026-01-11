// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log (num);  // Forof automatically detects where to step, hence no declaration,increment is given
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)  // Play with break and continue here for practice
}

// Maps 

const map= new Map() // Unique values in key value type

map.set ('IN', "India") // Set-Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
map.set ('US', "United States of America")
map.set ('FR', "France")
map.set ('IN', "India")

// console.log (map);

for (const [key,value] of map) {  // To hold key and value differently
    // console.log (key, "=>", value);
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { // Object is not iteratable here in for of in this way.
//     console.log(key, ':-', value);
    
// }
