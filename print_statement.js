const Transaction = require('./transaction');

class PrintStatement {
  print() {
    const transactions = Transaction.getAllTransactions();

    console.log("date\t|| credit\t|| debit\t|| balance");
    for (const transaction of transactions) {
      const { date, amount, type, balance } = transaction;
      const formattedAmount = type === "credit" ? amount.toFixed(2) : "";
      const formattedDebit = type === "debit" ? amount.toFixed(2) : "";
      const formattedBalance = balance.toFixed(2);
      console.log(`${date}\t|| ${formattedAmount}\t|| ${formattedDebit}\t|| ${formattedBalance}`);
    }
  }
}

module.exports = PrintStatement;
