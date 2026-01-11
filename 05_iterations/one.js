// for 

// Trick - Ctrl + D Selects all the duplicates

for (let i = 0; i <=10; i++) {    // Variable;condition;Increment 
    const element = i;            // Code starts executing after condition is met and before exiting increments the variable and repeat
    if (element == 7) {
        // console.log ("7 Is the Best Number");
    }
    // console.log (element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log (`Outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log (`Inner loop value : ${j} and Current loop ${i}`);
        // console.log (i + "*" + j + "=" + i*j );
        // console.log(`${i} * ${j} = ${i*j}`);
        
        
    }
    
}

let array= ["flash","batman","superman"]
//console.log(myArray.length);

for (let index = 0; index < array.length; index++) {
    const element = array [index];
    // console.log (element)
    
}

// break and continue

// for (let index = 1; index <=20; index++) {
//     if (index == 7 ){
//         console.log ("Detected 7");
//         break; // It will just break the for loop here after the given condition is met and will not excute next iterations.
//     }
//    console.log (`Value of i is ${index}`);
    
// }


for (let index = 1; index <=20; index++) {
    if (index == 7 ){
        console.log ("Detected 7");
        continue; // It just skips the condition for one time and does not exits loop, just does not prints the condition in loop.
    }
   console.log (`Value of i is ${index}`);
    
}