// regular expression

let reg = /shanky/g;//this is a regular expression g means global flag

// let reg = /shanky/i; // i is for case insensitive

console.log(reg)
console.log(reg.source)

// function to match expression
let s = "this is Shanky don shanky"

// exec()=>returns an array for match and null for no match

let result = reg.exec(s);
console.log(result)

// to get second word we used global flag
// we can use multiple exec with global flag

 result = reg.exec(s);
 console.log(result)
//  console.log(result.index)


//  text() function returns true and false

let resul  = reg.test(s)
console.log(resul)

//match () = it will return an array of results or null
// let resu = reg.match(s) //wrong
// let resu = s.match(reg) //right
// console.log(resu)

// search() = return index of first match or -1

let ind = s.search(reg)
console.log(ind)

// replace()=> returns new replaced string with all replacement

let repl = s.replace(reg,"tatti")
console.log(repl)