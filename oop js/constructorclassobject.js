class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${this.owner} deposited ₹${amount}.`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient balance!`);
        } else {
            this.balance -= amount;
            console.log(`${this.owner} withdrew ₹${amount}.`);
        }
    }

    getBalance() {
        console.log(`Current balance: ₹${this.balance}`);
        return this.balance;
    }
}

// Example usage:
const acc1 = new BankAccount("Jayesh", 5000);
acc1.deposit(1500);
acc1.withdraw(2000);
acc1.getBalance();      
