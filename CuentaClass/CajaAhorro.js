class CajaAhorro extends Cuenta {
  constructor(number, balance, interest) {
    super(number, balance);
    this.interes = interest;
  }
  debitar(amount) {
    if (amount <= this.balance) {
        this.balance-=amount;

    } else {
      throw new Error("No puedes retirar esa cantidad");
    }
  }
  toString() {
    return `${super.toString()} <br/>Interes =  + ${this.interes}`;
  }
}
