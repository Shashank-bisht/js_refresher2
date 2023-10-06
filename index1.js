// some basic of javascipt

console.time("your code took")

console.log("hello world");
console.table({name:"shanky", age:19});
console.warn("this is not good for you");

// to clear all console masala
// console.clear()
console.timeEnd("your code took");

// assert checks the condition 
console.assert(1>2, "this is not possible")

// to make error manually 
console.error("this is an error")

// variable in javascript 
//  var let const 

var name = "shanky";
console.log(name)

// const cannot be changed
// const naam = "shanky";
// naam = "shashank"
// console.log(naam)  // cannot change

// var is used in old javascript we can replace var with let
// var have golbal scope
// var can be redeclared and updated
// let cannot be redeclared but can be updated

let a = 44;
// let a = 55; //error
// a = 33 // no error
// let and const have block level scope

const nick = ["shanky","aman","raman"];
nick.push("sarika");
console.log(nick)

// in const we can add but we cannot change whole const

// programming case types 

// cammel case , pascal case , snake case , kebab case