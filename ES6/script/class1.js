"use strict";
var PersonOne = /** @class */ (function () {
    //construnctor
    // let name;
    function PersonOne(name) {
        this.name = name;
        console.log(this.name + " Const");
    }
    //static method
    PersonOne.staticMethod = function () {
        console.log("Static method");
    };
    PersonOne.prototype.greetPerson = function () {
        console.log("Hello " + this.name);
    };
    return PersonOne;
}());
var p2 = new PersonOne("mehul");
PersonOne.staticMethod();
p2.greetPerson();
//# sourceMappingURL=class1.js.map