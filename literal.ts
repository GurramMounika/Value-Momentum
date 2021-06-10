
// let custId=10                                           //1
// let custName='mounika'
// let custAcc= 2334343
// console.log(`customer id is ${custId} and name is ${custName} and customer account number is ${custAcc}`)
let customer={
    custId:10,
    custName:'sadha',
    custAccNbr:4444,
    getSavingDeposit(){
        let bank='Sbi'
        console.log(`customer id is: ${customer.custId} Your bank is ${bank}`)

    },
    getRecurringDeposit(){
        let balance=200000
        console.log(`customer account number is: ${customer.custAccNbr} Your balance is ${balance}`)
    }
}
customer.getSavingDeposit()
customer.getRecurringDeposit()
