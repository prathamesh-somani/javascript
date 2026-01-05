// console.log (2>1);
// console.log (2<1);
// console.log (2>=1);
// console.log (2 == 1 );
// console.log (2 !=1);

// console.log ("2" > 1);
// console.log ("02" > 1 ); // (Here JS automatically converts String Into Number for conversion)
/* JS allows here to compare two diff datatypes but Typescript does not allows it,
    so make sure data types are of same category while comparing.
*/

console.log (null>0);
console.log (null == 0);
console.log (null>=0);
/*The reason is that an equality check == and comparisons > < >=
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > O is false.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// Avoid null and undefined type comparisons

// === (it is used for strict check; along with values also checks datatypes)

console.log ("Triple Check :- ","2" === 2);