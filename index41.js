// custom errors

try {
    // console.log(he)
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if (age > 120) {
        throw new ReferenceError("this is impossible")
    }
} catch (error) {
    console.log(error.message)  
    console.log(error.name)  
    console.log(error.stack)  
}
