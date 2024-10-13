function createAccount(pin, amount=0) {
    let PIN = pin;
    let balance = amount;
    return {
        checkBalance(pinNum){
            if(pinNum !== PIN) return "Invalid PIN.";
            return `$${balance}`;           
        },
        deposit(pinNum, depAmount){
             if(pinNum !== PIN) return "Invalid PIN.";
             balance = balance + depAmount;
             return `Succesfully deposited $${depAmount}. Current balance: $${balance}.`
        },
        withdraw(pinNum, withdrawAmount){
            if(pinNum !== PIN) return "Invalid PIN.";
            if(withdrawAmount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            balance = balance - withdrawAmount;
            return `Succesfully withdrew $${withdrawAmount}. Current balance: $${balance}.`
        },
        changePin(pinNum, newPin){
            if(pinNum !== PIN) return "Invalid PIN.";
            PIN = newPin;
            return "PIN successfully changed!";
        }
    }
}

module.exports = { createAccount };
