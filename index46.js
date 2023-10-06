//overriding constructor

class Employee{
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
let e = new Programmer
// e.login()
// e.requestleave(33)