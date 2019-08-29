class PersonTwo{
    constructor(name){
        console.log("Person Constuctor");
    }

    getid(){
        return 10;
    }
}

class Employee extends PersonTwo{

    constructor(name){
        super(name);
        console.log(name + " Employee Class");

    }

    getid(){
        // return 50;
        return super.getid();
    }
}

//derived class and parent class.

let e2 = new Employee("Mehul");
console.log(e2.getid());
