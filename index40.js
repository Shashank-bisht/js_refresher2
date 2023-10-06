// error handling in javascript
// using try catch

// try {
//     console.log("hi")
// } catch (error) {
//     console.log("hello")
// }


try {
    setTimeout(() => {
        try {
            console.log(hi)
        } catch (error) {
            console.log("hello")
        }
    }, 3000);
} catch (error) {
    console.log("hello")
}