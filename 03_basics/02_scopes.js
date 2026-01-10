// var c = 300  // This is a global Scope
let a = 100  // Global Scope can define the varianle for entire code

// Whatever you write in global scope gets available in block scope; but no value of block scope should go outside the block.

if (true){    // Whatever you write in these block is called block scope; everything outside is global scope 
    let a = 10
    const b = 20
    // var c =30 // The reason behind not using var is that the variable gets defined outside the given function or code block also and thus we can't use the same vaiable again

    console.log (`Value of A inside the block Scope is ${a}`);
} 

// Scope {}- It appears with Functions and If else, the scope of the particular program or code block.

// console.log(a);
console.log (`Value of A in the Global Scope is ${a}`);
// console.log(b);
// console.log(c);

// Note :- The Global Scope isnide the browser console is different from the global scope in code environment when using node to run code.

function one() {
    const username = "Prathamesh"

    function two (){
        const website = "Youtube"
        console.log(username);
    }

    // console.log (website) // This line does not get execute as the variable is declared in the block scope of function two and called in function 1.

    two () // This executes the function two and prints username.
}

one () // This will excute anything called under Function one block.

/*
From the above function block we can derive that in case of nested functions, any variable defined in first function becomes the global variable for next function,
thus allowing to call or access the variable in block scope of it.
But any variable assigned in the nested function scope cannot be called and executed in the parent or say 1st Function. It can only be called in his own scope.
*/


if (true) {
    const username = "Prathamesh"

    if (username === "Prathamesh") {
        const website = " youtube"
        console.log (username+website);
    }    

    // console.log (website);

}

// console.log (username);

// Line 53 and 56 both give error as variables are been called outside their defined scopes.


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}


/*
So difference in above two functions is the way in which they are defined and declared.
In first Case, the function is defined directly while in second case it is stored in an expression addTwo.

Hence, we can see that when we execute addOne before the function the code gets run without any error.
But when we do same with addTwo the code fails and gives an error as the expression is not been intialized yet.

This concept is Hoisting. 
*/
