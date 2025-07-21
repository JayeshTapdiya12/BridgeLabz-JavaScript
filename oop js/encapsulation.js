// Encapsulation = Hiding internal details of an object and exposing only what’s necessary.

// truly private properties using #.

// making private thing by " # " in js

class Bankacc {
    #balance = 0;


    constructor(owner) {
        this.owner = owner
    };

    deposit(amount) {
        this.#balance += amount
    }

    getbalance() {

        console.log(`the balance is ${this.#balance}`);
        return this.#balance;
    }


}

const hi = new Bankacc("jayesh");
hi.deposit(50000);
console.log(hi.getbalance())

// getter and setter - to get and set the value in the class

class Student {
    #score = 0;

    get score() {
        return this.#score
    }
    set score(value) {
        if (value < 0) retun;
        this.#score = value
    }
}

const s = new Student();
s.score = 90
console.log(s.score);


class Password {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }
    validate(passwordt) {
        return (this.#password === passwordt)
    }
}
const pss = new Password("jayesh", "Jayesh12");
console.log(pss.validate("Jayesh12"))


class Wallet {
    #amount = 0;

    constructor(name) {
        this.name = name
    }

    addmoney(money) {
        this.#amount += money;
    }
    getbalance() {
        return this.#amount
    }
}

const a = new Wallet("jayesh");
a.addmoney(5000);
console.log(a.getbalance())