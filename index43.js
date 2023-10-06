// constructor in js

class Railwayform{
    constructor(givename, trainno){
        console.log("constructor is called");
        this.name = givename
        this.trainn = trainno
    }
    submit(){
        alert(this.name + ': your form has been submitted for train number ' + this.trainno);
    }
    // this keyword refers to an object.
    cancel(){
        alert(this.name + ': your form has been cancelled for train number ' + this.trainn);
    }
}

// creating objects 
let shankyform = new Railwayform('shanky',88)
shankyform.submit()


// A function is directly called by its name, whereas a method includes a code that is called by the object’s name.