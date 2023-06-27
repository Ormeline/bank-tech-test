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

  it('should handle a transaction with zero amount', () => {
    const transaction1 = new Transaction('14/01/2023', 0, "credit", 0);

    expect(transaction1.balance).toEqual(0);
  });

  it('should calculate the balance with both credit and debit transactions', () => {
    const transaction1 = new Transaction('10/01/2023', 1000, "credit", 1000);
    const transaction2 = new Transaction('13/01/2023', 500, "debit", 500);
    const transaction3 = new Transaction('14/01/2023', 2000, "credit", 2500);
    const transaction4 = new Transaction('15/01/2023', 100, "debit", 2400);

    expect(transaction4.balance).toEqual(2400);
  }); 

  it('should handle transactions with negative amounts', () => {
    const transaction1 = new Transaction('10/01/2023', 500, "debit", 0);
    const transaction2 = new Transaction('13/01/2023', 1000, "debit", -1000);
    const transaction3 = new Transaction('14/01/2023', 2000, "debit", -3000);

    expect(transaction3.balance).toEqual(-3000);
  });
  
  

});