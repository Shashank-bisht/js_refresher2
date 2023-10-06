// Symbols = eak unique chiz
// symbol generate new primitive

// const sim = Symbol("hello")
// const sim = new Symbol("hello") //wrong
const sim =  Symbol("hello")
const sem =  Symbol("hello")
console.log('symble is',sim)
console.log(sim===sem)
// will give false because we have used symbol

const s1 = Symbol("name")
const s2 = Symbol("age")

obj = {};
obj[s1] = "shanky"
obj[s2] = "19"
obj["class"] = "13"

console.log(obj)
console.log(obj[s1])
console.log(obj[s2])
console.log(obj.s2) //not allowed

console.log(JSON.stringify(obj))