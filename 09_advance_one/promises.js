// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Create Promises

const promiseOne = new Promise(function(resolve,reject){
    // Do as async task
    // DB calls,cryptography,network

    setTimeout(function(){
        console.log("Async Time is completed")
        resolve()
    },1000)

})

promiseOne.then(function(){  // .then is directly connected to resolve;  Automtiaccly recives an argument
    console.log("Promise Consumed")  // exceutes only after task is complted or say task is resolved and executed
}) 

// Without storing in a variable writing whole logic together
new Promise(function(resolve,reject){
    setTimeout (function(){
        console.log ("Async Task 2");
        resolve()
    },1000)


}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Prathamesh", email: "xyz@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user); // received all the data written as obj in resolve
})

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error)
        {
            resolve({username: "Prathamesh",password: "Kal-El"})
        }
        else {
            reject ("ERROR: Something Went Wrong") // reject is mainly used for errors.
        }
    },1000)
})

const username = promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then ((username)=>{
    console.log(username);
    
})
.catch (function(error){ // catch is for errors
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error)
        {
            resolve({username: "javascript",password: "Kal-El"})
        }
        else {
            reject ("ERROR: JS Went Wrong") // reject is mainly used for errors.
        }
    },1000)
})

async function consumePromiseFive() { 
    try {
        const response = await promiseFive   // async await cannot directly handle the error
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()


// async function getAllUsers() {
//    try {
//      const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     //  console.log(response);
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("E: ",error);
//    }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))