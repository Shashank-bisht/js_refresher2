// hositing

// Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution

// it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 


// Variable declared by let cannot be redeclared and must be declared before use whereas variables declared with var keyword are hoisted. 

// var sai hoisting ho jati hai varibale ko use kar sakte ho but let and const sai hoisting nahi hoti

// function expression and class expression are not hoisted

// Function Expression  allows us to create an anonymous function which doesn’t have any function name which is the main difference between Function Expression and Function Declaration. A function expression can be used as an IIFE (Immediately Invoked Function Expression)which runs as soon as it is defined. A function expression has to be stored in a variable and can be accessed using variableName


// console.log(x)
// var x ;
// let x ;
wish()

// function wish() {
//     console.log("hello")
// }

// this is function expression
let wish = function(){
    console.log("hello")
}
console.log(x)