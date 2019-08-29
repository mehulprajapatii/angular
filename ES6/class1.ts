class PersonOne{
    //construnctor
    // let name;
    constructor(name){
        this.name =  name;
        console.log(this.name + " Const");
    }

    //static method
    static staticMethod(){
        console.log("Static method");
    }

    greetPerson(){
        console.log("Hello " + this.name);
    }

}

let p2 = new PersonOne("mehul");
PersonOne.staticMethod();
p2.greetPerson();