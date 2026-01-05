//  Primitive (Call by Value)
// It BASICALLY is whenever you copy them,original reference data of memory is not given
// instead a copy is given of them and whatever changes you make it is stored in these copy

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// (Check if JS Is Dynamic or Static Language ?)

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

console.log (typeof score)
console.log (typeof scorevalue)
console.log (typeof isLoggedIn)
console.log (typeof outSideTemp)
console.log (typeof userEmail)

const id = Symbol('123') // Symbol is used when uniqueness is needed in values
const anotherId = Symbol('123')

console.log(id === anotherId); // Comes False

// const bigNumber = 14484956559946646n (n makes it bigINT; also happens automtaically for big numbers)
// console.log (typeof bigNumber)

// Non primitive (Reference Type)

// Array, Objects, Functions (For Array and Objects, Object is Dtype ; for Functions, FunctionObject is Dtype)

const heros = ["steve", "eleven", "will"]; // []= ARRAY
let myObj = {
    name: "peter",
    age: 22,
}
// {} = OBJECT

const myFunction = function(){
    console.log("Hello world");
}
// function(){} = FUNCTION
console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ****************************************** //

// Memory 

// Stack (Primitive) // Heap (Non Primitive)

let myUserId = 1234

let anotherUserId = myUserId
anotherUserId = 4321

console.log(myUserId);
console.log(anotherUserId);

let userOne = {
    Email : "xyz@gmail.com",
    password: "1234"
}

let userTwo = userOne
userTwo.Email = "abc@outlook.com" // using this way we can change the value of the object

console.log(userOne.Email);
console.log(userTwo.Email);