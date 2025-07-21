// polymorphism means many form

// differner class have the same name of methods

// Each class implements the method differently


class Animal {
    speak() {
        console.log("the animal can speak");
    }
}

class Dog extends Animal {
    speak() {
        console.log("the dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("the cat meow!!");
    }
}


const hello = [new Animal(), new Dog(), new Cat()];

hello.forEach(hello => hello.speak());


class Employee {
    work() {
        console.log("the emp is working")
    }
}

class Developer extends Employee {
    work() {
        console.log("the developer is working")
    }
}

class Manger extends Employee {
    work() {
        console.log("the manager is working")
    }
}

class Intern extends Employee {
    work() {
        console.log("the intern is working")
    }
}

const emo = [new Developer(), new Manger(), new Intern()];

emo.forEach(emo => emo.work())