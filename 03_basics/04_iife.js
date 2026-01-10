// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ; in order to say the code when to end the (),so next block(IIFE) could run.

// IIFE is used to eliminate the global scope pollution.

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('pratham')


// Anything written in () automatically invokes the function without explicityly calling