// creating , removing and replacing elements
let element = document.createElement('li');

// Add a class name to the li element
element.className = "childul";
element.id = "createdli";
element.setAttribute('title','mytitle');
element.innerHTML = "<b>hello</b>";

let ul = document.querySelector('ul.this');
ul.appendChild(element)
console.log(ul)
console.log(element)

// creating second elements
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('this is a created node for elem2');
elem2.appendChild(tnode)
element.replaceWith(elem2)

// here myul is parent id
let m = document.getElementById('myul');
// m.replaceChild(element, document.getElem+entById('lui'))

// to remove any child element
m.removeChild(document.getElementById('lui'))

// to get name of id or class
let pr = elem2.getAttribute('class');
console.log(pr)

// to remove id or class
elem2.removeAttribute('id');
console.log(elem2, pr)