// console.log(Math.PI);
// Math.PI = 5    // The Math.PI value is constant, it cannot be overwritten.
// console.log(Math.ceil(Math.PI));

//  An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
const descripter = Object.getOwnPropertyDescriptor(Math,"PI")       // It tells abt hidden things or properties of object

// console.log(descripter);


// Creating a new object
// const mynewObject = Object.create(null)

const chai = {
    name : "ginger chai",
    price : 250,
    isAvailable : true,

    orderChai : function (){
        console.log("Chai nahi bani");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// to change the properties of the object property
Object.defineProperty(chai,"name",{
    // writable: false,
    enumerable: false   //objects can be made unavialble in iterration and loops
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// chai.name = "tea"

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {    //to make obj iterable we used .entries
    if (typeof value !== 'function'){
    console.log(`${key}:${value}`);
    }
}