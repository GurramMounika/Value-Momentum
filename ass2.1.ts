export class Bank{
    accountNo:number

    constructor(accountNo){
        this.accountNo=accountNo
    }

    getAccountInfo(){
        return `account details: ${this.accountNo}`
    }
} 