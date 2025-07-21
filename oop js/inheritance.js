class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} logged in`);
    }
}

class Admin extends User {
    deleteUser(userName) {
        console.log(`Admin ${this.name} deleted user ${userName}`);
    }
}

const admin1 = new Admin("Jayesh", "jayesh@gmail.com");
admin1.login();
admin1.deleteUser("Tapdiya");   
