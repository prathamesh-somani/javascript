const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","batman","flash"]

// marvel_heroes.push(dc_heroes) // Here dc_heroes is pushed into original array itself in the form of array, not in a copy.
// console.log (marvel_heroes);
// console.log (marvel_heroes[3][1]); //It will produce the element inside 2nd array

// const all_heroes = marvel_heroes.concat(dc_heroes) // Here when we use concat then original array is not changed instead it is stored in a new array.(it does not takes array as an array)
// console.log(all_heroes); 

const all_new_heroes = [...marvel_heroes,...dc_heroes] // It basically is spread method. (... is spread operator)

// console.log (all_new_heroes); // Due to ... all the elements of array are spread down into individual elements

 // The Main difference here between slice and splice is that in slice original array is not manipulated while in splice original array is manipulated

 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Flat gives all the sub arrays into one single array based on hou much depth is given
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // Not an array
console.log(Array.from("Hitesh"))   // converts into an array
console.log(Array.from({name: "hitesh"})) // interesting case for interviews

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Of Returns a new array from set of elements