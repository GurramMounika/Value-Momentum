// let custId=10                                           //1
// let custName='mounika'
// let custAcc= 2334343
// console.log(`customer id is ${custId} and name is ${custName} and customer account number is ${custAcc}`)
var customer = {
    custId: 588,
    custName: 'anu',
    custAccNbr: 987654,
    getSavingDeposit: function () {
        var bank = 'Sbi';
        console.log("customer id is: " + customer.custId + " Your bank is " + bank);
    },
    getRecurringDeposit: function () {
        var balance = 10000;
        console.log("customer account number is: " + customer.custAccNbr + " Your balance is " + balance);
    }
};
customer.getSavingDeposit();
customer.getRecurringDeposit();
