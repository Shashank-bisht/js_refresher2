// console.log("hellogfg")
// date and time object 

let today = new Date;
console.log(today);
console.log(typeof(today));

let otherdate = new Date();
otherdate = new Date('july 18 2003');
console.log(otherdate)
console.log(otherdate.getDate());
console.log(otherdate.getDay());

otherdate.setDate(19)
otherdate.setHours(19)
console.log(otherdate)
console.log(otherdate.getHours());