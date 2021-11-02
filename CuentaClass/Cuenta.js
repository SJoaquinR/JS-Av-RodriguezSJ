class Cuenta {
  constructor(number, balance) {
    this.number = number;
    this.balance = balance;
  }
  acredit(amount) {
    this.balance += amount;
  }
  debitar(amount) {
    this.balance -= amount;
  }
  toString() {
    return "<br/>Numero= " + this.number + ", Balance= " + this.balance;
  }
}
