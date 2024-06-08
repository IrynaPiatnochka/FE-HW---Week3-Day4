class Account {
    constructor(accountNumber, owner, balance = 0) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }

    // Implement methods to deposit and withdraw funds.
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`This ${amount} was deposited to your account. New balance is ${this.balance}`);
        } else {
            console.log("Invalid amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`This amount ${amount} was withdrawn from your account. New balance is ${this.balance}`);
        } else {
            console.log("Invalid amount.");
        }
    }

    // Create method to calculate interest based on balance.
    getInterest(rate, years) {
        if (rate > 0 && years > 0) {
            const interest = this.balance * Math.pow((1 + rate), years) - this.balance;
            console.log(`Interest earned for ${years} year at ${rate * 100}% rate: $${interest.toFixed(2)}`);
        } else {
            console.log("Invalid interest rate or time period.");
        }
    }
}

console.log(myAccount);
myAccount.deposit();
myAccount.withdraw();
myAccount.getInterest();

