# Bank tech test
This is a project developed as a solution to the Bank Tech Test challenge during the tenth week of the Makers Academy course. It is a command-line tool that mimics a bank account and enables users to perform various banking operations such as depositing and withdrawing money, and viewing their transaction history.

###  Using Bank Tech Test
1. Clone the repository and go to the directory using the command cd documents/programming/bank-tech-test

2. Install Node.js if not already installed
3. run nvm use node to check that you are using the lastest version of node
4. Initialise npm by running npm init -y in the terminal
5. Install Jest testing framework by running npm add jest
then npm install -g jest.

###  Run tests:
To run all tests, you have to run jest in the terminal

# Planning
To create the banking tech test, I followed a structured approach. I identified the core functionalities required and created a user story for each feature. I then carefully thought about the classes, methods, names and how they would function following the single method design pattern.

To structure the code, I separated each class into its own file and used separate test files. I followed a test-driven development approach to ensure code correctness.

The index.js file is responsible for instantiating the BankAccount object by calling new BankAccount(), performing transactions by calling deposit() and withdraw() methods, reversing the transactions array so the most recent transaction is first, instantiating the PrintStatement object by calling new PrintStatement(), and calling the print() method on the PrintStatement object, passing in the transactions array. This prints the transaction history to the console in reverse chronological order, reflecting the final balance of the bank account.

# User story:
As a user,
So that I can manage my finances,
I would like to create an account.

As a user,
So that I can keep money in my account,
I would like to be able to make a deposit.

As a user,
So that I can spend money from my account,
I would like to be able to withdraw money.

As a user,
So that I can keep track of my financial activities,
I would like to be able to print my bank statement.

## Classes and methods

Class      | Methods | Instance variables
------------ | ------------- | -------------
| BankAccount | Deposit() | this.balance |
|            | Withdraw() | this.transactactions |
|            | constructor()|             |
| PrintStatement| print() |            |
| Transaction| constructor() |date    |
|            |              | amount  |
|            |              | type    |
|           |              | balance |
|           | print()      | initialBalance|
|           | reverse()    | printer |
|           |              | date1, date2, date3|


### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see:

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```



### Test coverage
![test coverage](coverage.png)



### result on node

![node](node_result.png)
