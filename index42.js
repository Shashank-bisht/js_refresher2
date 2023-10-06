class Railwayform{
    constructor(){
        console.log("constructor is called");
    }
    submit(){
        alert(this.name + ': your form has been submitted for train number ' + this.trainno);
    }
    // this keyword refers to an object.
    cancel(){
        alert(this.name + ': your form has been cancelled for train number ' + this.trainn);
    }

    // givename should be same 

    fill(givename, trainno){
        this.name = givename
        this.trainn = trainno
    }
}

// creating objects 
let shankyform = new Railwayform()
shankyform.fill('shanky',88)
shankyform.submit()


// A function is directly called by its name, whereas a method includes a code that is called by the object’s name.