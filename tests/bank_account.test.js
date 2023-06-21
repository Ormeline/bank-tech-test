const BankAccount = require('../bank_account');

describe('BankAccount', () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount(0);
  });

  it('should check the balance', () => {
    expect(bankAccount.balance).toBe(0);
  });
});