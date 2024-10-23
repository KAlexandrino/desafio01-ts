export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      this.balance += amount
      console.log(`Voce depositou R$${amount}. Seu novo saldo é de R$${this.balance}`);
    } else {
      console.log('Depósito não permitido. Conta inativa');
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Você sacou R$${amount}. Seu novo saldo é R$${this.balance}`);
      } else {
        console.log('Saldo insuficiente.');
      }
    } else {
      console.log('Saque não permitido. Conta inativa.');
    }
  };

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
