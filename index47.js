// inheritance and method overriding

class Employee{
    constructor(name){
        console.log(`Employee constructor with name ${name}`);
        this.name = name
    }
    login(){
        console.log("employee has login");
    }
    logout(){
        console.log("employee has logout");
    }

    requestleave(leaves){
        console.log(`employee has requested ${leaves} leave`);
    }
}

class Programmer extends Employee{
    // constructor(...args){-> if there is no constructor in the child class, this is crested automatically
    // super(...args)
    // }


    constructor(name){
        super(name)
        this.name = name // this should be used after super
        console.log(`this is new constructor`)
    }

    requestCoffee(){
        console.log(`employee has requested ${x} coffees`);
    }
    
    // method overriding
    requestleave(leaves){
        // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor. 
        

        // getting login method using super
        super.login()


        // parent ka requestleave run hoga
        super.requestleave(44)
        // console.log(`employee has requested ${leaves+1} grace leave`);
    }
}

// let e = new Employee
let e = new Programmer("shanky")
e.login()
e.requestleave(33)