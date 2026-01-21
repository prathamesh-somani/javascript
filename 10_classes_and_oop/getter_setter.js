// getter and setter - basically when you don't want any other person to know a particular thing or give access like say passwpord and if tried accessing it you can tell error or enccrypted password
// They are basically in every class
// Both always comes together

class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get password(){
        return `${this._password}hitesh`   // we made a new property has the call stack exceeded maximum size as it got confused for consturctor is also definning same parameter(properties) , get and set also, so it becomes a race between constructor and get set.
        // Hence we just tweak the properties in get set
    }

    set password(value){
        this._password = value
    }


    get email (){
        return this._email.toUpperCase()
    }

    set email (value){
        this._email = value
    }
}


const Prathamesh = new User ("prathamesh@ai.com","abc")
console.log(Prathamesh.password);
console.log(Prathamesh.email);
