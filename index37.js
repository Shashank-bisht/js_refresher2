// generators in javascript

// syntax
function* numgen(){
    let i = 0;
    // yield 1;
    // yield 2;
    // yield 3;

    while(true){
        // yield (i++).toString();
        yield i++;
    }
}
let x = numgen()
console.log(x.next().value)
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())

