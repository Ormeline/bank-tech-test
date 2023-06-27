const PrintStatement = require('../print_statement');
const Transaction = require('../transaction');

describe('PrintStatement', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should print the header', () => {
    const expectedOutput = "date || credit || debit || balance";

    const printer = new PrintStatement();

    printer.print([]);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);
  });

  it('should format credit transactions correctly', () => {
    Transaction.transactions = [
      new Transaction('01/01/2023', 1000, 'credit', 1000)
    ];
  
    const printStatement = new PrintStatement();
    const expectedOutput = 'date || credit || debit || balance';
  
    printStatement.print(Transaction.transactions);
  
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, expectedOutput);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '01/01/2023 || 1000.00 ||  || 1000.00');
  });


  it('should format debit transactions correctly', () => {
    Transaction.transactions = [
      new Transaction('01/01/2023', 500, 'debit', -500)
    ];
  
    const printStatement = new PrintStatement();
    const expectedOutput = 'date || credit || debit || balance';
  
    printStatement.print(Transaction.transactions);
  
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, expectedOutput);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '01/01/2023 ||  || 500.00 || -500.00');
  });

it('should print the full statement with transactions in reverse chronological order', () => {
  Transaction.transactions = [
    new Transaction('14/01/2023', 500, 'debit', 2500),
    new Transaction('13/01/2023', 2000, 'credit', 3000),
    new Transaction('10/01/2023', 1000, 'credit', 1000)
  ];

  const printStatement = new PrintStatement();
  const expectedOutput = 'date || credit || debit || balance';

  printStatement.print(Transaction.transactions);

  expect(consoleSpy).toHaveBeenCalledTimes(4);
  expect(consoleSpy).toHaveBeenNthCalledWith(1, expectedOutput);
  expect(consoleSpy).toHaveBeenNthCalledWith(2, '14/01/2023 ||  || 500.00 || 2500.00');
  expect(consoleSpy).toHaveBeenNthCalledWith(3, '13/01/2023 || 2000.00 ||  || 3000.00');
  expect(consoleSpy).toHaveBeenNthCalledWith(4, '10/01/2023 || 1000.00 ||  || 1000.00');
});
});
