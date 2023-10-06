// localStorage is a sort of web storage that stores data. This allows JavaScript sites and applications to store and retrieve data without having to worry about it expiring.


let name = prompt("Enter the name ??")
let age  = prompt("Enter the age??")

localStorage.setItem(name,age)

console.log(`the value at ${name} is ${localStorage.getItem(name)}
`)

// to clear the localStorage
// localStorage.clear()

// to remove particular thing

if (age<18) {
    localStorage.removeItem(name);
}