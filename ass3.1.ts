import {Bank} from "./ass2.1"
import {Address} from "./ass1.1"

class Customer{
    name:string
    constructor(name){
        this.name=name
    }

    bank = new Bank(1010101)
    obj1=new Address("wnp")

    getCustomerInfo(){
        console.log(` hello : ${this.obj1.getAddressInfo()}  ${this.bank.getAccountInfo()}`);
    }
}

let obj2 = new Customer("srinivasulu")
obj2.getCustomerInfo()