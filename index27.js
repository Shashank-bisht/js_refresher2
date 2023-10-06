// promises in javascript

// a Promise is used for performing asynchronous operations. It represents a result that may be available now, or in the future or never. Promises are easy to manage when dealing with multiple asynchronous operations.


// function func1()
// {
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             const error = false;
//             if(error){ console.log("your promise is resolved")
//             resolve();}
//             else{
//                 console.log("not resolved")
//             }
//            reject();
//         }, 2000);
//     })
// }


// then kai andar wla resolve and catch kai andarwla reject.

// if promise is fulfilled

// func1().then(function(){
//     console.log("thanks for resoving")
// }).catch(function(){//if promise is not fulfilled
//     console.log(" sorrry  not resolved")
// })


// resolve(value) = if the condition is fullfilled successfully

// reject(value) = if the condition is not fullfilled successfully


const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("I am promise and i am resolved")
        resolve(true);
    }, 3000);
})

p1.then((value)=>{
    console.log(value)
})

// console.log(p1)

const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("I am promise and i am rejected")
        reject(new Error("this is an error"))
    }, 3000);
})
// console.log(p2)

// p2.catch((value)=>{
//     console.log(value)
// })
p2.catch((error)=>{
    console.log(error)
})