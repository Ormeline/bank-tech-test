class Transaction {
    static transactions = [];
  
    constructor(date, amount, type, balance) {
      this.date = date;
      this.amount = amount;
      this.type = type;
      this.balance = balance;
      Transaction.transactions.push(this);
    }
  
    static getAllTransactions() {
      return Transaction.transactions;
    }
  
    static getTotalBalance() {
      return Transaction.transactions.reduce((total, transaction) => {
        if (transaction.type === "credit") {
          return total + transaction.amount;
        } else if (transaction.type === "debit") {
          return total - transaction.amount;
        }
        return total;
      }, 0);
    }
  }
  
  module.exports = Transaction;