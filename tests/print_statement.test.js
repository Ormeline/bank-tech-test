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
    const expectedOutput = 'date\t|| credit\t|| debit\t|| balance';

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
    const expectedOutput = 'date\t|| credit\t|| debit\t|| balance';
  
    const consoleSpy = jest.spyOn(console, 'log');
  
    printStatement.print();
  
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, expectedOutput);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '01/01/2023\t|| 1000.00\t|| \t|| 1000.00');
  });
  


  it('should format debit transactions correctly', () => {
    Transaction.transactions = [
      new Transaction('01/01/2023', 500, 'debit', -500)
    ];

    const printStatement = new PrintStatement();

    printStatement.print();

    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith('01/01/2023\t|| \t|| 500.00\t|| -500.00');
  });
});
