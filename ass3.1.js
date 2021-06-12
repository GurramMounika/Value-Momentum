"use strict";
exports.__esModule = true;
var ass2_1_1 = require("./ass2.1");
var ass1_1_1 = require("./ass1.1");
var Customer = /** @class */ (function () {
    function Customer(name) {
        this.bank = new ass2_1_1.Bank(1010101);
        this.obj1 = new ass1_1_1.Address("wnp");
        this.name = name;
    }
    Customer.prototype.getCustomerInfo = function () {
        console.log(" hello : " + this.obj1.getAddressInfo() + "  " + this.bank.getAccountInfo());
    };
    return Customer;
}());
var obj2 = new Customer("srinivasulu");
obj2.getCustomerInfo();
