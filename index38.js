// maps in javascript
// we can use any type of key or value

const mymap = new Map();

let key1 = "shanky",key2={}, key3 = function(){}

//setting map values
mymap.set(key1,"bisht");
mymap.set(key2,"empty obj");
mymap.set(key3,"empty func");
console.log(mymap)

//getting value from a map

let val1 = mymap.get(key1)
console.log(val1)
console.log(mymap.size)

//you can loop using for..of to get keys and values
for (let [key,value]of mymap ){
    console.log(key,value)
}

//get only keys
for(let key of mymap.keys()){
    console.log("key is ",key);
}

//get only values
for(let value of mymap.values()){
    console.log("value is ",value);
}

// using foreach loop
//value should be written first
mymap.forEach((value,key)=>{
    console.log('key is',key);
    console.log('value is',value);
})

// converting map to array
let myarr = Array.from(mymap);
console.log('map to array is',myarr);

//converting map keys to array
let mykeysarray = Array.from(mymap.keys());
console.log('map to key array is',mykeysarray)

//converting map keys to array
let myvalsarray = Array.from(mymap.values());
console.log('map to value array is',myvalsarray)