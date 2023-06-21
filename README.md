# Bank tech test

###  How to install and run my code and tests:
nvm install node
nvm use node
npm init -y
npm add jest
npm install -g jest
node run index.js
jest -coverage (this will help me know test coverage)

jest

# User story:
As a user,
So that I can manage my finances,
I would like to create an account.

As a user,
So that I can keep money in my account,
I would like to be able to make a deposit into my account.

As a user,
So that I can spend money from my account,
I would like to be able to withdraw money from my account.

As a user,
So that I can keep track of my financial activities,
I would like to be able to print my bank statement.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## My approach:
To create the banking tech test, I followed a structured approach. I identified the core functionalities required and created the BankAccount class to implement them. Each transaction was represented by an object of the Transaction class, and the PrintStatement class created a formatted table for the transaction history.

To structure the code, I separated each class into its own file and used separate test files. I followed a test-driven development approach to ensure code correctness.

 The index.js file was responsible for instantiating the BankAccount object, performing transactions, and printing the transaction history and total balance to the console.

### Test coverage

![Alt text](<Screenshot 2023-06-21 at 12.12.23.png>)

### result on node

![Alt text](<Screenshot 2023-06-21 at 13.32.54.png>)



## Self-assessment
Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit



<!-- BEGIN GENERATED SECTION DO NOT EDIT -->


<!-- END GENERATED SECTION DO NOT EDIT -->