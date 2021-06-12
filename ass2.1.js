"use strict";
exports.__esModule = true;
exports.Bank = void 0;
var Bank = /** @class */ (function () {
    function Bank(accountNo) {
        this.accountNo = accountNo;
    }
    Bank.prototype.getAccountInfo = function () {
        return "account details: " + this.accountNo;
    };
    return Bank;
}());
exports.Bank = Bank;
