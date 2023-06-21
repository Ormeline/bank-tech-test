const BankAccount = require("./bank_account");
const PrintStatement = require("./print_statement");
const Transaction = require("./transaction");

const initialBalance = 0;
const bankAccount = new BankAccount(initialBalance);

const date1 = "10/01/2023"; 
const date2 = "13/01/2023";
const date3 = "14/01/2023";

bankAccount.deposit(1000, date1, "credit");  
bankAccount.deposit(2000, date2, "credit");
bankAccount.withdraw(500, date3, "debit");   

const printer = new PrintStatement();
printer.print(bankAccount.transactions);

const totalBalance = bankAccount.balance;
console.log(`Total balance: ${totalBalance.toFixed(2)}`);