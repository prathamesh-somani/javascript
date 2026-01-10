const user = {
    username : "prathamesh",
    price : 999,

    WelcomeMessage : function () {
        console.log (`${this.username}, welcome to the website`);
        console.log (this);
    }
    
}
//  console.log (`${user.username}, welcome to the website`);

// user.WelcomeMessage ()
// user.username= "peter"
// user.WelcomeMessage ()

// console.log (this); // When you run this in console, the global object in browser is window object.

// function chai(){
//     let username = "pratham"
//     console.log (this.username); // Here it comes as undefined as this keyword cannot be used in fucntions as it did with obj.
// }

// chai ()

// const chai = function () {
//     let username = "pratham"
//     console.log (this.username);

// }

const chai = () => {       // => It declares the arrow function
    let username = "pratham"
    console.log (this);

}


// chai ()

// Basic arrow function

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// Implict Arrow Function 
// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

// In short when {} are used return is must, when not explicitly mentioned return is automatically implied.

const addTwo = (num1, num2) => ({username: "hitesh"})  // when declaring object as this () is must,else it is undefined


console.log(addTwo(5,8));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
