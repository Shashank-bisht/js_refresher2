// ES6 classes and inheritance in js

class Employee{
    constructor(name,experience,division){
    this.Name = name;
    this.Experience = experience;
    this.Division = division;
    }
     slogan(){
       return "inqulab jindabad"
    }    

    // using static there is no need of creating a object like shanky
    static add(a,b){
        return a+b;
    }
}
shanky = new Employee("shashank","5 years","A")
// console.log(shanky)
// console.log(shanky.Name)
// console.log(shanky.slogan())
// console.log(Employee.add(4,5))

// console.log(Employee.slogan())
// Inheritance

// super will call the constructor from which Employee is inherited

class Programmer extends Employee{
constructor(name,experience,division,language){
    super(name,experience,division)
    this.Language = language;
}
favouritelang(){
    if(this.Language=="python"){
        return "java"
    }else{
        return "javascript"
    }
}
static mul(a,b){
    return a*b
}
}

hanky = new Programmer("shashank",88,"A","python")
console.log(hanky)
console.log(hanky.favouritelang())
console.log(hanky.Language)
console.log(Programmer.mul(4,5))