"use strict";
var myset = Object.create(null);
myset.id = 0;
if (myset.id) {
    console.log("Id Exists");
}
else {
    console.log("Id Not Exists");
}
//maps
var mymap = Object.create(null);
mymap.name = "Mehuuuu";
var val = mymap.name;
console.log(val);
var obj1 = {};
var obj2 = {};
mymap[obj1] = "World";
console.log(mymap[obj1]); //String Representation
console.log(mymap[obj2]);
console.log(obj2.toString());
console.log(obj1.toString());
//# sourceMappingURL=sets.js.map