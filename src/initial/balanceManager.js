var balance = 0;

module.exports = {
  increaseBalance: function(amount){
    balance += amount;
  },
  getBalance: function(){ 
    return balance;
  },
  canAfford: function(amount){
    if(isValidAmount(amount)){
        caErrorMessage = "Invalid Input";
        throw new Error(errorMessage);
    }
    return amount <= balance;
  },
  // This method decreases the balance of the vending machine. If the balance amount is not 
  // enough to cover the purchase, the method throws an error. 
  decreaseBalance: function(amount){
    if(!canAfford(amount)){
      var dbErrorMessage = 'Insufficient balance';
      throw new Error(errorMessage);
    }
    balance -= amount;
  },
  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  }
};