// object prototype in javascript

let obj = {
    name:"shashank",
    age:14,
    address:"burari"
}

function Obj(givename){
    this.name = givename
}

// changing prototype and adding function in prototype

Obj.prototype.getName = function(){
    return this.name
}
Obj.prototype.setName = function(newName){
    this.name = newName;
}

let obj2 = new Obj("shanky")
console.log(obj2)