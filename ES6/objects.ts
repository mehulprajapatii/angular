let fisrtname= 'Mehul';
let lastname = 'prajapati';


//Object literals

let person = {
    fisrtname:fisrtname,
    lastname:lastname
};
//Same Name as properties
let person1 = {
    fisrtname,
    lastname
};

// console.log(person1.fisrtname);
// console.log(person1.lastname);


function createPerson(fisrtname:string,lastname:string,age:number){
    let fullname =  fisrtname + " " + lastname;
    return {fisrtname,lastname, fullname,isSenior(){
        return age > 60;
    } };

}


let p = createPerson("Ross","taylor",62);
console.log(p.fisrtname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
