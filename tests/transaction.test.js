const Transaction = require('../transaction');

describe('Transaction', () => {
  it('should create a transaction with a credit', () => {
    const transaction = new Transaction('10/01/2023', 1000, "credit", 1000);

    expect(transaction.date).toEqual('10/01/2023');
    expect(transaction.amount).toEqual(1000);
    expect(transaction.type).toEqual("credit");
    expect(transaction.balance).toEqual(1000);
  });

  it('should create a transaction with a debit', () => {
    const transaction = new Transaction('13/01/2023', 500, "debit", 500);

    expect(transaction.date).toEqual('13/01/2023');
    expect(transaction.amount).toEqual(500);
    expect(transaction.type).toEqual("debit");
    expect(transaction.balance).toEqual(500);
  });

  it('should throw an error when creating a transaction with a zero amount', () => {
    try {
      new Transaction('10/01/2023', 0, "credit", 1000);
    } catch (err) {
      console.log(err.message);
      expect(err.message).toEqual("Please add some funds");
    }
  });


  it('should return all transactions', () => {
    Transaction.transactions = []; // Clear existing transactions

    const transaction1 = new Transaction('10/01/2023', 1000, "credit", 1000);
    const transaction2 = new Transaction('13/01/2023', 500, "debit", transaction1.balance - 500);
    const transaction3 = new Transaction('14/01/2023', 2000, "credit", transaction2.balance + 2000);

    const allTransactions = Transaction.getAllTransactions();

    expect(allTransactions).toHaveLength(3);
    expect(allTransactions).toContain(transaction1);
    expect(allTransactions).toContain(transaction2);
    expect(allTransactions).toContain(transaction3);
  });

  it('should calculate the balance with both credit and debit transactions', () => {
    Transaction.transactions = []; 
  
    const transaction1 = new Transaction('10/01/2023', 1000, "credit", 1000);
    const transaction2 = new Transaction('13/01/2023', 500, "debit", transaction1.balance - 500);
    const transaction3 = new Transaction('14/01/2023', 2000, "credit", transaction2.balance + 2000);
    const transaction4 = new Transaction('15/01/2023', 100, "debit", transaction3.balance - 100);
  
    const totalBalance = Transaction.getTotalBalance();
  
    expect(totalBalance).toEqual(2400);
  });

  it('should calculate the total balance correctly', () => {
    Transaction.transactions = []; // Clear existing transactions

    const transaction1 = new Transaction('10/01/2023', 1000, "credit", 1000);
    const transaction2 = new Transaction('13/01/2023', 500, "debit", transaction1.balance - 500);
    const transaction3 = new Transaction('14/01/2023', 2000, "credit", transaction2.balance + 2000);

    const totalBalance = Transaction.getTotalBalance();

    expect(totalBalance).toEqual(2500);
  });

  it('should handle transactions with zero amounts', () => {
    Transaction.transactions = []; // Clear existing transactions

    const transaction1 = new Transaction('10/01/2023', 0, "credit", 0);
    const transaction2 = new Transaction('13/01/2023', 0, "debit", transaction1.balance - 0);
    const transaction3 = new Transaction('14/01/2023', 0, "credit", transaction2.balance + 0);

    const totalBalance = Transaction.getTotalBalance();

    expect(totalBalance).toEqual(0);
  });

  it('should handle transactions with negative amounts', () => {
    Transaction.transactions = []; 
  
    const transaction1 = new Transaction('10/01/2023', 500, "debit", 0);
    const transaction2 = new Transaction('13/01/2023', 1000, "debit", transaction1.balance - 1000);
    const transaction3 = new Transaction('14/01/2023', 2000, "debit", transaction2.balance - 2000);
  
    const totalBalance = Transaction.getTotalBalance();
  
    expect(totalBalance).toEqual(-3500);
  });
  
  

});