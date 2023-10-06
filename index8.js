// window is a global object

// it contains various mehtod
// window object represent browser window and provides method to control it 

// dom represent the page content as html

// DOM
// let x = document;
x = document.all;
// x = document.body;
// console.log(x);

//Array.from nai x ko array bana dia
Array.from(x).forEach(function(element){
    // console.log(element)
})

x = document.links[0];
x = document.links[0].href;
console.log(x);

// elements selectors
/*
single element selector
multiple element selector
*/

let element = document.getElementById('myfirst');

// element = element.className;
// element = element.childNodes[3]; //third child
// element = element.parentNode;
// element.style.color = 'red';
// element.innerText = "jada mat bol pitega"
// element.innerHTML = '<b> hi this is shanky</b>'
console.log(element.hasChildNodes())
console.log(element);

// this are single element selectors
let se = document.querySelector('#myfirst');
se = document.querySelector('.child');
se = document.querySelector('h1');
se.style.color = 'green';
console.log(se)

// some multi elements selectors
// let elem = document.getElementsByClassName('child');
// console.log(elem)

// let elem = document.getElementsByClassName('container');
// console.log(elem[0].getElementsByClassName('child'))

// let elem = document.getElementsByTagName('div');
// console.log(elem)

let elem = document.getElementsByClassName('child');
// console.log(elem)
Array.from(elem).forEach(element=>{
    console.log(element)
})


// BOM = browser object model
// bom represent additional objects provided by the browser for working with everything except the document

// the function alert/confirm/prompt are also a part of the bom