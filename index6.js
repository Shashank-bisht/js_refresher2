// function 
// here regard is a default value
function greet(name, regard="regards"){
    console.log(`Happy birthday! ${name} may you live long. ${regard}`)
}
let name1 = "shashank"
let name2 = "shanky"

greet(name1, "thanks a lot" )
greet(name2)

// making function inside object

const myobj = {
    name:"shanky",
    game: function(){
        return "bgmi";
    }
}
console.log(myobj.game())

games = ["bgmi","gta","cod"];

// games.forEach(function(element,index,array){
//     console.log(element,index,array)
// })

