const Transaction = require('./transaction');

class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount, date, type) {
    const transaction = new Transaction(date, amount, type, this.balance + amount);
    this.transactions.push(transaction);
    this.balance += amount;
  }

  withdraw(amount, date, type) {
    if (amount <= this.balance) {
      const transaction = new Transaction(date, amount, type, this.balance - amount);
      this.transactions.push(transaction);
      this.balance -= amount;
   // } else {
    //console.log("Insufficient balance");
    }
  }

 // getTransactions() {
    //return this.transactions;
  //}
}

module.exports = BankAccount;