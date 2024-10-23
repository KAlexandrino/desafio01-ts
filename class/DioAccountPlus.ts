import { DioAccount } from "./DioAccount";

export class DioAccountPlus extends DioAccount {
    constructor (name: string, accountNumber: number) {
        super (name, accountNumber)
    }


deposit = (amount:number): void => {
    const dioAccountPlus = amount + 10
    if (this.validateStatus()){
        this['balance'] += dioAccountPlus
        console.log(`Você depositou R$${amount}, mas com bônus seu saldo almentou para R$${dioAccountPlus}`)
    } else {
        console.log('Depósito não permitido. Conta inativa.')
    }
}
}