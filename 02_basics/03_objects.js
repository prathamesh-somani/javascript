// singleton - related to constructors
// Object.create (Constructor method to define object)

// object literals - these are not singleton

const mySym = Symbol ("key1")
const   JsUser = {
    name: "Prathamesh",
    "full name": "Prathamesh Somani", // Here we have used string for key, hence we cannot access it with (.)
    [mySym]: "myKey1", // If [] is not used in key then dtype is not a symbol instead a string.
    age: 21,
    location: "Pune",
    email: "xyz@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);


JsUser.email = "abc@google.com" // To change the values of object
// Object.freeze(JsUser) // freeze is used to lock the object and further any changes made are not recorded
JsUser.email = "abc@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
