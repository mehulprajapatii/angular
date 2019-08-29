"use strict";
var getRegValue = function () {
    return 10;
};
console.log(getRegValue());
//ommit function key word
var getArrowValue = function () {
    return 20;
};
console.log(getArrowValue());
var getArrowValue1 = function () { return 30; }; // only one value can be return this way
console.log(getArrowValue1());
var getArrowValue2 = function (m) { return 10 * m; };
console.log(getArrowValue2(10));
var getArrowValue3 = function (m, bonus) { return m * bonus; };
console.log(getArrowValue3(10, 2));
console.log(typeof getArrowValue3);
//# sourceMappingURL=arrow_func.js.map