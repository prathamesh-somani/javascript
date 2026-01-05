const name = "Prathamesh"
const repoCount = 10

// console.log (name + repoCount + "Value") (It concatentaes all the strings and additional content)
// The above syntax is not considered while writing code as it is outdated.

// In Modern times, we make use of backticks (` `). It Allows for string interposition,where we make placeholders and can add any variables we want in the placeholders.
// We can also do many things on the go like directly adding any method to variable in placeholder.
console.log (`Hello My Name is ${name} and my repo count is ${repoCount}.`);

// String Define

const gameName = new String ("Lucifier-PS" )

console.log (gameName[0]); // To Access using Key Value Pair Types
console.log (gameName.__proto__); // To Access Prototype

// String Methods
console.log (gameName.length);
console.log (gameName.toUpperCase());
console.log (gameName.charAt (4));
console.log (gameName.indexOf("e"));

const newString = gameName.substring (0,4) // slicing (cannot use -ve)
console.log (newString);

const anotherString = gameName.slice (-8,8)
console.log (anotherString);

const newStringOne = "    hello    "
console.log (newStringOne);
console.log (newStringOne.trim());  // Trim removes all the leading and trailing blank spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // Replace is used to replace any value or word in string variable

console.log(url.includes("Prathamesh")) // Includes is used to check wheteher sny keyword is present or not in string

console.log (gameName.split ("-"))

// On Mdn and Console go through and look other prototypes(methods) of String

