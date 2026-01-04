class BankAccount{
    owner
    balance
    constructor( owner, balance) {
        this.balance = balance
        this.owner = owner
    }
    deposit(amont){
        this.balance += amont
    }
    withdraw(amount){
        if (amount > this.balance){
            throw new Error("There is not enoght money to make withdraw to this amount")
        }
        this.balance -= amount
    }
}

class Bank{
    constructor(){
        this.accounts = []
    }
    addAccount(account){
        this.accounts.push(account)
    }
    transfer(fromName, toName, amount){
        fromName += amount
        toName -= amount
    }
}