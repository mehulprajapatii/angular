"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonTwo = /** @class */ (function () {
    function PersonTwo(name) {
        console.log("Person Constuctor");
    }
    PersonTwo.prototype.getid = function () {
        return 10;
    };
    return PersonTwo;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " Employee Class");
        return _this;
    }
    Employee.prototype.getid = function () {
        // return 50;
        return _super.prototype.getid.call(this);
    };
    return Employee;
}(PersonTwo));
//derived class and parent class.
var e2 = new Employee("Mehul");
console.log(e2.getid());
//# sourceMappingURL=inheritance.js.map