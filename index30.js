// destructuring in javascript

// let a,b;
// [a,b] = [34,44]
// console.log(a,b)

// [a,b,c, ...d] = [1,2,3,4,5,6,7,8,9,10];
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

({a,b,c,...d}={a:3,b:33,c:33,d:77,e:7})
console.log(a,b,c,d)

// object destructuring

const laptop={
    model:'Hp pavilion',
    age:'6 months',
    price:'60k',
    start: function(){console.log('started')}
}
const {model,age,price,start}=laptop;
console.log(model)
console.log(age)
console.log(start)
start()