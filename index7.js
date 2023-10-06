// changing to string

//  let arr = [1,2,4,4,56,9];
//  console.log(arr.length)
 let arr = String([1,2,4,4,6,9]);
 console.log(arr.length)

//  changing to numbers
let str = Number("7779");
// str = Number("df55");
// str = Number(true);
console.log(str,(typeof str))
// true =1 , false = 0

// number is represented in purple color

// concatination
let n1 = "77";
let n2 = 88;
console.log(n1+n2);

// dom - > document object model
// window is a superset of dom
// window is a global object

let x = window
// console.log(x.alert("hi shanky"))
// console.log(x.prompt("can we be frinds"))
// y = x.prompt("can we be frinds")
// console.log(y)
// console.log(x.confirm("Are you sure??"))

x = window.innerHeight
x = window.location
x = window.location.toString();
console.log(x)