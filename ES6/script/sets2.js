"use strict";
var mySet = new Set();
mySet.add("Hello");
mySet.add(2);
mySet.add(2);
var obj1 = {};
var obj2 = {};
mySet.add(obj1);
mySet.add(obj2);
console.log(mySet.size);
//# sourceMappingURL=sets2.js.map