export{}
let message ='Welcome Back';
console.log(message);


let x=10;
const y=20;


// let x=30;
const title='Type Script Learning';


let isBeginner:boolean= true;
let total:number=0;

let name : string= "Mehul";

//template string
let sentence:string=` My name is ${name} 
I am a beginner in typescript`;

console.log(sentence);



//Sub type of all types.
//null
let n:null= null;
//undefined

let u:undefined=undefined;



let isNew:boolean= null;
let muName:string=undefined;


//Declaring an Array type
let list1:number[] = [1,2,3,4];
let list2:Array<number>=[1,2,3,4,5];


//mixed type in Array
let person1:[string,number]=['Name',3];//size is fixed and order 


//enum type
/* enum Color{
    Red,Green,Blue
}; */
enum Color{
    Red=5,Green,Blue
};

let c:Color=Color.Green;
console.log(c);

//Any type Var TYpe
let random:any=10;
random=true;
random="Mehul";



//function in typescript

function add(num1:number,numb2:number=10) : number{
    if(numb2){
        return num1+numb2;
    }else{
        return num1;
    }
    
}

console.log(add(1,3));
console.log(add(3));

interface Person{
    firstname:string;
    lastname:string;
}

function fullName(person:Person){
    console.log(`${person.firstname} ${person.lastname}` );
}

let p:object={
    firstname:"mehul",
    // lastname:"prajapati"

};

// fullName(p);

class Employee{
    empplyeeName:string;

    constructor(name:string){
        this.empplyeeName=name;
    }

    greet(){
        console.log(`Good Morning ${this.empplyeeName}`);
    }
}
let emp1=new Employee("Mehul");
console.log(emp1);
console.log(emp1.empplyeeName);
emp1.greet();



class Manager extends Employee{
    constructor(managerName:string){
        super(managerName);
    }

    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let m1=new Manager("Batman");
m1.delegateWork();
m1.greet();
console.log(m1.empplyeeName);

