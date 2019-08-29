let mySet= new Set();

mySet.add("Hello");
mySet.add(2);
mySet.add(2);
let obj1={};
let obj2={};
mySet.add(obj1);
mySet.add(obj2);

console.log(mySet.size);


