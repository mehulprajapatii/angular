class Person{
    greet(){}
}

let p1= new Person();
/*employee();
function employee(){}
employee();
*/
console.log(typeof Person);
console.log(p1.greet === Person.prototype.greet);