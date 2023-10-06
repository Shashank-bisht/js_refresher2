// arrays 

const marks = [33,22,34,55,22,38];
const fruits = ["banana","apple","mango"];

const arr = new Array("shanky","sarkia");
console.log(arr)

// to get length
// console.log(arr.length)

// console.log(Array.isArray(arr))

// arr[1] = "tarika";
// console.log(arr)

let position = marks.indexOf(22);
console.log(position);

// to add one element at last
marks.push(100);
console.log(marks);

// to add one element at starting
marks.unshift(99);
console.log(marks);

// to remove one element from last
marks.pop();
console.log(marks);

// to remove one element from starting
marks.shift();
console.log(marks);

marks.splice(2,1);
console.log(marks);

marks.reverse();
console.log(marks);

// delete operator - it will not affect the length of array
delete marks[0];
console.log(marks);

// sort method = change original array
marks.sort()
console.log(marks)

// objects 
let myobj = {
    name : "shashank bisht",
    age : 19,
    game : "bgmi"
}

console.log(myobj.name)
// or
console.log(myobj["name"])

// Array.from is used to convert obj to array
let c = "shanky";
let ar = Array.from(c);
console.log(ar)


let mark = {
    harry:44,
    shubham:33,
    lovish:7,
    monika:2
}

// Object.keys(marks) will return an object

for(let i=0;Object.keys(mark).length;i++){
    console.log("the marks of"+Object.keys(mark)[i]+"are"+mark[Object.keys(mark)[i]])
}



