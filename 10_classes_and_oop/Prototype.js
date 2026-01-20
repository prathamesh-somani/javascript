// let myName = "Prathamesh     "
// let mychannel = "chai     "


// console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeroes = ["thor","spiderman"]

let heroPowers = {
    thor : "hammer",
    spiderman : "web-shooter",

    getSpiderManPower : function (){
        console.log(`Spidey Powers are ${this.spiderman}`);
        
    } 
}

Object.prototype.prathamesh = function(){
    console.log(`Prathamesh is present in all objects`);
    
}

Array.prototype.heyPrathamesh = function(){
    console.log(`Prathamesh Says Hello`);
    
}

// heroPowers.getSpiderManPower()
// heroPowers.prathamesh()
// myHeroes.prathamesh()

// heroPowers.heyPrathamesh()
// myHeroes.heyPrathamesh()

// inheritance

const User = {
    name : "Chai",
    mail : "chai@google.com"
}

const Teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignments : "Js Assignment",
    fulltime : true,
    __proto__ : TeachingSupport   // Inherites all the prroperties of TeachingSupport
}

Teacher.__proto__ = User // Teacher inherites all the properties of user

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher) 
// Sets the prototype of a specified object o to object proto or null. Returns the object o.

// here teachingsuuport gets access to all properties of Teacher

let anotherUsername = "Chai aur Code      "
let myName = "Prathamesh      "

String.prototype.trueLength = function (){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);   
}

anotherUsername.trueLength()
myName.trueLength()

"Manish".trueLength()
"Somani".trueLength()