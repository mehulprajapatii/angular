"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () { };
    return Person;
}());
var p1 = new Person();
/*employee();
function employee(){}
employee();
*/
console.log(typeof Person);
console.log(p1.greet === Person.prototype.greet);
//# sourceMappingURL=class.js.map