import { CompanyAccount } from './class/CompanyAccount'
import { DioAccountPlus } from './class/DioAccountPlus'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)


const dioAccountPlus = new DioAccountPlus ('Kaioba', 150)

// Testando os métodos
console.log('--- CompanyAccount ---');
companyAccount.deposit(500);  // Depósito de 500
companyAccount.getBalance();  // Exibe o saldo

console.log('--- DioAccountPlus ---');
dioAccountPlus.deposit(200);    // Depósito de 200, mas com bônus será 210
dioAccountPlus.getBalance();    // Exibe o saldo

console.log('--- PeopleAccount ---');
peopleAccount.deposit(400);  // Depósito de 400
peopleAccount.getBalance();  // Exibe o saldo