"use strict";
var fisrtname = 'Mehul';
var lastname = 'prajapati';
//Object literals
var person = {
    fisrtname: fisrtname,
    lastname: lastname
};
//Same Name as properties
var person1 = {
    fisrtname: fisrtname,
    lastname: lastname
};
// console.log(person1.fisrtname);
// console.log(person1.lastname);
function createPerson(fisrtname, lastname, age) {
    var fullname = fisrtname + " " + lastname;
    return { fisrtname: fisrtname, lastname: lastname, fullname: fullname, isSenior: function () {
            return age > 60;
        } };
}
var p = createPerson("Ross", "taylor", 62);
console.log(p.fisrtname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
//# sourceMappingURL=objects.js.map