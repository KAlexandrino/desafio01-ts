import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()){
      this.balance += amount
      console.log(`Você pegou um empréstimo de R$${amount}. Seu novo saldo é R$${this.balance}`)
    } else {
      console.log(`Empréstimo não permitido. Conta inativa`)
    }
  }
}
