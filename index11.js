// Events 

document.getElementById('heading').addEventListener('click', function(e){
    console.log(e)
    this.style.color = "red"
    console.log("you clicked me")
    // location.href='//codewithharry.com'
    // let variable;
    // variable = e.target;
    // variable = e.target.className;
    // variable = e.target.id;
    // to get location withrespect to x
//     variable = e.offsetX;
//     console.log(variable)
})


//element will return one and elements will return two 

// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// function func1(e){
//     console.log('thanks',e)
//     e.preventDefault();
// }

// for double click
// btn.addEventListener('dblclick', func2);

// function func2(e){
//     console.log("thanks its a double click", e);
//     e.preventDefault();
// }

// document.querySelector('.no').addEventListener('mouseenter', function(){
//     console.log("you visited me!!")
// })

// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log("you leaved me!!")
// })

// console.log(document.getElementsByTagName("div"))

// mouse move event
// document.querySelector('.container').addEventListener('mousemove', function(e){
//     console.log(e.offsetX, e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, ${e.offsetY})`;
//     console.log("you trigreed me!!");
// })


// .contains
let chi = document.getElementByClassName("child")
let chl = document.getElementByClassName("chil")
console.log(chi.contains(chl))