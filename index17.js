// console.log("hell")
// objects 

// let car = {
//     name:"tesla",
//     topspeed:200,
//     run:function(){
//         console.log("car is running")
//     }
// }
// console.log(car)
// console.log(car.topspeed)
// console.log(car.run())

// constructor in js
function Generalcar(givenName, givenSpeed) {
    this.name = givenName;
    this.topspeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`)
    }
    this.analyze = function () {
        console.log(`this car is slower by ${220 - this.topspeed} than mercedes`)
    }
}
// new word create new object with help of constructor

car1 = new Generalcar("nissan", 100);
car2 = new Generalcar("nano", 60);
console.log(car1.name)
console.log(car1.topspeed)