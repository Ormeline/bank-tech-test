const PrintStatement = require('../print_statement');

describe('PrintStatement', () => {
  it('should print the header', () => {
    const expectedOutput = 'date\t|| credit\t|| debit\t|| balance';

    const consoleSpy = jest.spyOn(console, 'log');

    const printer = new PrintStatement();

    printer.print([]);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(expectedOutput);
  });
});