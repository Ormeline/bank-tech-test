const BankAccount = require('../bank_account');

describe('BankAccount', () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount(0);
  });

  it('should check the balance', () => {
    expect(bankAccount.balance).toBe(0);
  });

  it('should deposit funds into the account', () => {
    bankAccount.deposit(500);
    expect(bankAccount.balance).toBe(500);
  });

  it('should withdraw funds from the account', () => {
    bankAccount.deposit(1000);
    bankAccount.withdraw(500);
    expect(bankAccount.balance).toBe(500);
  });

  it('should not allow withdrawal if there is insufficient funds', () => {
    bankAccount.deposit(200);
    bankAccount.withdraw(500);
    expect(bankAccount.balance).toBe(200); // Balance should remain unchanged
  });

  it('should deal with a negative balance', () => {
    const negativeBalance = -500;
    bankAccount = new BankAccount(negativeBalance);
    expect(bankAccount.balance).toBe(negativeBalance);
  });
});

