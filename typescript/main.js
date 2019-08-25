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
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
var x = 10;
var y = 20;
// let x=30;
var title = 'Type Script Learning';
var isBeginner = true;
var total = 0;
var name = "Mehul";
//template string
var sentence = " My name is " + name + " \nI am a beginner in typescript";
console.log(sentence);
//Sub type of all types.
//null
var n = null;
//undefined
var u = undefined;
var isNew = null;
var muName = undefined;
//Declaring an Array type
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4, 5];
//mixed type in Array
var person1 = ['Name', 3]; //size is fixed and order 
//enum type
/* enum Color{
    Red,Green,Blue
}; */
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//Any type Var TYpe
var random = 10;
random = true;
random = "Mehul";
//function in typescript
function add(num1, numb2) {
    if (numb2 === void 0) { numb2 = 10; }
    if (numb2) {
        return num1 + numb2;
    }
    else {
        return num1;
    }
}
console.log(add(1, 3));
console.log(add(3));
function fullName(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = {
    firstname: "mehul"
};
// fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empplyeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.empplyeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Mehul");
console.log(emp1);
console.log(emp1.empplyeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Batman");
m1.delegateWork();
m1.greet();
console.log(m1.empplyeeName);
