// string methods and function
const name = "shanky";
const que = "how are you ?";
console.log(name + ' ' + que);

// concatination of string

// let age = "hello";
// age = age.concat(" this is shanky");
// console.log(age)
// console.log(age.length);
// console.log(age.toUpperCase())

// location of particular string
console.log(que.indexOf('a'))
// console.log(que.indexOf('z')) 

console.log(que.endsWith("?"))
console.log(que.charAt(0))
console.log(que.includes("?"))
console.log(que.substring(0,3))
// slice and substring are almost equal
console.log(que.slice(0,4))

// splits between given arguments
console.log(que.split("are"))
console.log(que.split(" "))

console.log(que.replace("are","is"))

// template literals

// let game = ["BGMI","COD"]

// let ame = `<h1>${name} likes ${game[0]} and ${game[1]} </h1>`;
// document.body.innerHTML = ame;



// loops in js
// for , for in , for of , while , do while