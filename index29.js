// async and await
// async return promise
//await matlab wait karo

// async function shanky(){
//     console.log('Inside shanky function')
//     return "shanky"
// }
// console.log("before calling shanky")
// let a = shanky();
// console.log("after calling shanky")
// console.log(a)
// console.log("last line of this js file")


async function shanky(){
    console.log('Inside shanky function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const user = await response.json();
    console.log('user resolved')
    return user;
    return "shanky"
}
console.log("before calling shanky")
let a = shanky();
console.log("after calling shanky")
console.log(a);
a.then(data=> console.log(data))
console.log("last line of this js file")