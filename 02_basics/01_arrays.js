// array

// Ways to Declare Array 

const myArr = [0,1,2,3,4,5] // It can also contain mix datatypes in one array
const myHeroes = ["captain rogers","peter parker"]

const myArr2 = new Array (1,2,3,4) // In these way, no need to give sq.brackets

// console.log(myArr[2]);
// console.log(myHeroes[1]);
// console.log(myArr2[3]);

// Array Methods

// myArr.push(6) // Adds element into array
// myArr.push(7)
// myArr.pop()   // Removes Last Element

// myArr.unshift (9)  // Inserts Values at start index of the array
// myArr.shift ()  // Removes the first element from array

// console.log(myArr.includes(9));  // Gives true or false to check if value is present or not
// console.log(myArr.indexOf(3));   // Finds the index of the given value; not present then returns -1

// const newArr =  myArr.join() // Join chnages the dtype of array into string


// console.log (myArr);
// console.log (typeof myArr);
// console.log (newArr);
// console.log (typeof newArr);

// slice and splice

console.log ("A", myArr)

const myn1 = myArr.slice(1,3)
console.log (myn1);
console.log ("B",myArr)

const myn2 = myArr.splice(1,3) 
console.log("C", myArr);
console.log (myn2);

 // The Main difference here between slice and splice is that in slice original array is not manipulated while in splice original array is manipulated.