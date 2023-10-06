// sets in javascript

const myset = new Set();//initialize an empty set
myset.add('this');
myset.add('my name');
myset.add('this');
myset.add('this');
myset.add(777)
myset.add(777)
// element should not repeat in set

console.log("the set look like",myset)
// to check size
console.log(myset.size)
// to check this is in set or not
console.log(myset.has('this'))
// to delete particular element in set
myset.delete('this')
console.log(myset)

// or 
// let set = new Set([1,2,66,'false',"66"]);
// console.log(set)


// iterating a set
// for (let item of myset){
//     console.log('item is :',item)
// }

// using foreach
myset.forEach((item)=>{
    console.log('item is',item);
})


array = Array.from(myset)
console.log(array)

set = new Set(array);
console.log(set)


// to remove duplicate item form array

arr = [1,1,2,3,4,4]

seet = new Set(arr)
console.log(seet)