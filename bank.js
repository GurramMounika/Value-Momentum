var B = /** @class */ (function () {
    function B(bid, bname, bacno) {
        this.bid = bid;
        this.bname = bname;
        this.bacno = bacno;
    }
    B.prototype.getSavingDeposit = function () {
        return "bank id is:" + this.bid + " with bank name: " + this.bname + "and account number :" + this.bacno + " gets 8% interest per year";
    };
    B.prototype.getReccuringDeposit = function () {
        return "bank id is:" + this.bid + " with bank name :" + this.bname + " and account number :" + this.bacno + " gets 40% interest per year";
    };
    B.prototype.getFixedDeposit = function () {
        return "bank id is: " + this.bid + " with bank name :" + this.bname + " and account number :" + this.bacno + " gets 20% interest per year";
    };
    return B;
}());
var b1 = new B(101, 'Andhra Bank', 101010);
var b2 = new B(102, 'uko', 202020);
var b3 = new B(103, 'state bank', 303030);
console.log(b1.getSavingDeposit());
console.log(b2.getReccuringDeposit());
console.log(b3.getFixedDeposit());
console.log(b1.bid, b1.bname, b1.bacno);
console.log(b2.bid, b2.bname, b2.bacno);
console.log(b3.bid, b3.bname, b3.bacno);
