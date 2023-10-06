// if else = conditional statement 

// const age = "19";
// const doesdrive = false;
// if(age==19){
//     console.log("you are correct")
// }
// else{
//     console.log("pagal mat bana")
// }

// == checks only value but === checks both type and value

// if(doesdrive && age>18){
//     console.log("you can drive")
// }
// else{
//     console.log("you cannot drive")
// }

// for loop 
// for(i=0;i<=10;i++){
//     console.log(i)
// }

// while loop
// let j = 0;
// while(j<10){
//     console.log(j+1);
//     j++;
// }

// do-while loop
// let k=0;
// do{
//     console.log(k+1);
//     k+=1
// } while(k<10);

// to iterate Array

// let arr = [1,2,3,4,5,6];
// arr.forEach(function(element){
//     console.log(element)
// })

// to iterate object 

let myobj = {
    name : "shashank bisht",
    age : 19,
    game : "bgmi"
}

for(let key in myobj){
    console.log(`the ${key} of object is ${myobj[key]}`)
}

// let arr = [1,2,3,4,5]
// let a;
// do {
//      a = prompt("Enter a number")
//     a = Number.parseInt(a)
//     arr.push(a)
// } while (a!=0);
// console.log(arr)

// square of a number
let arry = [1,2,3,5,6]
let n = arry.map((x)=>{
    return x*x
})
console.log(n)



