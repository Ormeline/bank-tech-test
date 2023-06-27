const Transaction = require('./transaction');

class PrintStatement {
  print(transactions) {
    console.log("date || credit || debit || balance");
    for (const transaction of transactions) {
      const { date, amount, type, balance } = transaction;
      const formattedAmount = type === "credit" ? amount.toFixed(2) : "";
      const formattedDebit = type === "debit" ? amount.toFixed(2) : "";
      const formattedBalance = balance.toFixed(2);
      console.log(`${date} || ${formattedAmount} || ${formattedDebit} || ${formattedBalance}`);
    }
  }
}

module.exports = PrintStatement;