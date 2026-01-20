// ES6

class User{
    constructor (username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }


    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
} 


const chai = new User ("chai","chai@xyz.com","1234")

console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// behind the scene if class was not used

function Users (username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

Users.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Users.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new Users ("tea","tea@xyz.com","123")

console.log(tea.encryptPassword());
console.log(tea.changeUserName());