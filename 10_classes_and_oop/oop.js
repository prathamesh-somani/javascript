// Object Literal

const user = {
    username : "Prathamesh",    // Parameters
    loginCount : 8,
    signedIn : true,

    getUserDetails : function (){          // Method
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
};

// console.log(user.username);
// console.log(user.getUserDetails());
//  console.log(this);

// this keyword is used for telling about current context
// It is mainly used inside a method of objects and when we want to refer a current obj in method


// Creating multiple users
// using constructor Function (new keyword)


function User (username,logincount,isLoggedIn){
    this.username=username;
    this.loginCount=logincount;
    this.isLoggedIn=isLoggedIn;

    
    this.greeting = function (){    //object.prototype.Constructor
        console.log(`Welcome ${this.username}`);
        

    return this  //(Implicitly defined if used new)
    
    }
}

const User1 = new User("Prathamesh",8,true)
const User2 = new User("Manish",12,false)

console.log(User1.constructor);   // constructor property is reference of self value
// console.log(User2);
// User2.greeting();


// new keyword
// empty object is created called instance
// new object is created
// constructor function is called due to new keyword
// all your arguments are packed in this and given to you
// this keyword (all arguments) are injected into it
// we get it in fucntion then


// instance of (do google or gpt)

