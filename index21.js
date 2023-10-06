// asynchronous = eak he time mai multiple things hona
// ways to write asynchronous code in javascript

// async/await
// callbacks
// promises


// if we donot want to block the way of done printing 

// setTimeout(() => {
//     for (let index = 0; index < 454; index++) {
//         const element = index;
//         console.log("This is index number" + index)       
//     }
// }, 1000);


// console.log("done printing")

// using cleartime out

// let a = setTimeout(function(){
//     alert("hello")
// },5000)
// let b = prompt("do you want to quit??")
// if("n"==b){n
//     clearTimeout(a)
// }


// using setTimeout
// const sum = function (a,b) {
//     console.log("sum is "+(a+b))
//     
// }
// setTimeout(sum,1000,4,5)// setTimeout(function,delay,argum1,argum2)

// setInterval(function,delay,arg1,arg2)


//  using setTimeout(asynchronous in nature)
// const sum = function (a,b) {
//     console.log("sum is "+(a+b))
//     
// }
// setInterval(sum,1000,4,5)