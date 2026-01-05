const score = 400
// console.log (score);

const balance = new Number (100)
// console.log(balance);

// console.log (balance.toString().length); // Converted into string and now can use properties of string
// console.log(balance.toFixed(3)); // Precision value upto mentioned decimal points

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); abs gives all values in +ve
// console.log(Math.round(4.6)); round is used for rounding off
// console.log(Math.ceil(4.2));  ceil rounds up to bigger number
// console.log(Math.floor(4.9));  floor rounds up to lower number
// console.log(Math.min(4, 3, 6, 8));  min. value
// console.log(Math.max(4, 3, 6, 8));  max.value

console.log (Math.random()); // random value is always from 0 to 1.
console.log ((Math.random ()*10) +1 );
console.log (Math.floor(Math.random ()*10)+1);

const min = 10
const max = 20

console.log(Math.floor (Math.random () * (max - min + 1))+ min);
