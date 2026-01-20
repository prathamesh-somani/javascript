class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){   // static makes sure the given method or property is accessed by it's class or object only, not by everyone else
        return `123`
    }
}

const Prathamesh = new User("Prathamesh")
// console.log(Prathamesh.createId());
console.log(User.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());