// if 

// any code in if condition is true then it wil execute and if false then not.

const isUserLoggedIn = true
const temperature = 41

// if (temperature < 50){
//     console.log ("Temperature Less than 50");
// }
// else {
//     console.log ("Temperature more than 50");
// }


// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log (`User Power : ${power}`);
// }

// console.log (`User Power : ${power}`);

// Short Hand Notation (Implicit Scope)

// const balance = 1000

// if (balance > 500) console.log ("test1"), console.log("test2"); // Make sure don't right using ,.

// if (balance < 500) {
//     console.log ("less than 500");
// }
// else if (balance < 750){
//     console.log ("less than 750");
// }
// else if (balance < 900){
//     console.log ("less than 900");
// }
// else{
//     console.log ("less than 1200");
// }


const UserLoggedIn = true
const debitcard = true
const LoggedinfromGoogle = false
const Loggedinfromemail = true

if (UserLoggedIn && debitcard){
    console.log("Allow to Buy Course");  
}

if (LoggedinfromGoogle || Loggedinfromemail) {
    console.log("User Logged in");
    
}

