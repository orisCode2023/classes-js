class BankAcount{
    owner
    balance

    constructor(owner, balance){
        this.balance = balance
        this.owner = owner
    }

    deposit(amount){
        this.balance += amount
    }
    withdraw(amount){
        this.balance -= amount
    }
    checkBalance(){
        console.log(`The bank owner name is ${this.owner} and the account 
            ballance is ${this.balance}`)
    }
}

const account = new BankAcount("ori", 0)
account.deposit(1500) 
account.withdraw(1300)
account.checkBalance()  