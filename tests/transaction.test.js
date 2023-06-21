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
});