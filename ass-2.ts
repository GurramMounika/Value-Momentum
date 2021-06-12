import {Address} from "./ass1.1"
import {Bank} from "./ass2.1"

class Employer{
    name:string
    constructor(name){
        this.name=name
    }
    address = new Address("mahaboobnagar")
    bank = new Bank(202020)

    getEmployerInfo(){

        console.log(`name of the employer:${this.name}`);
        console.log(`${this.address.getAddressInfo()}`);
        console.log(`${this.bank.getAccountInfo()}`);

    }
}

class Employee extends Employer{
    salary:number
    constructor(salary){
        super(salary);
        this.salary=salary
    }

    getEmployeeInfo(){
        console.log(`employee salary ${this.salary}`);                
    }
}

let obj1 = new Employee(303030)
obj1.getEmployeeInfo();
obj1.getEmployerInfo(); 