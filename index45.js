// Destructuring assignment and Spread Operator

let arr = [1, 2, 3, 4]

// let [a,v,c,s] = arr
// let [a,v,...rest] = arr
let [a, , ...rest] = arr

console.log(a, rest)


// spread operator 
// for making key value pairs

let arr1 = [1, 2, 3, 4]
const obj = { ...arr1 }
console.log(arr1)

function sum(x, y, z) {
    return x + y + z
}
console.log(sum(...arr1))


// using spread operator
let data = {
    name:"shanky",
    age:33,
    gender:"male"
}

// to change only name or age 
console.log({...data,name:"shank",age:5})