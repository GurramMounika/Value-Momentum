"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ass1_1_1 = require("./ass1.1");
var ass2_1_1 = require("./ass2.1");
var Employer = /** @class */ (function () {
    function Employer(name) {
        this.address = new ass1_1_1.Address("mahaboobnagar");
        this.bank = new ass2_1_1.Bank(202020);
        this.name = name;
    }
    Employer.prototype.getEmployerInfo = function () {
        console.log("name of the employer:" + this.name);
        console.log("" + this.address.getAddressInfo());
        console.log("" + this.bank.getAccountInfo());
    };
    return Employer;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(salary) {
        var _this = _super.call(this, salary) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.getEmployeeInfo = function () {
        console.log("employee salary " + this.salary);
    };
    return Employee;
}(Employer));
var obj1 = new Employee(303030);
obj1.getEmployeeInfo();
obj1.getEmployerInfo();
