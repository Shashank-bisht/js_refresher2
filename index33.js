// for of loop vs for in loop
people = ['shanky','shank','raju']

// traditional loop

// for(let index=0; index<people.length;index++){
//     const element = people[index];
//     console.log(element)
// }

// obj = {
//     "name":"shanky",
//     "age":"19",
//     "skill":"html,css,js"
// }

// iterating using traditional for in loop => to get keys of obj

// for (let key in obj){
//     console.log(obj[key]);
// }

// mystring = "hello this is shanky";
// for(let char in mystring){
//     console.log(mystring[char])
// }

// using for of loop 

for(let name of people){
    console.log(name)
}