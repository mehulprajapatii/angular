let employees = [
    "mehul","prajpati","male"
]

// let [fname,lname,gender] =  employees;//destruing array
let elements:string[]
let [fname, ...elements] =  employees; //rest operator

// let [,,gender] =  employee;


console.log(fname);
// console.log(lname);
// console.log(gender);
console.log(elements);


