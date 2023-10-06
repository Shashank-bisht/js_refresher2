// children, parents
let x = document.querySelector('.no')
 x = document.querySelector('.container')
console.log(x.childNodes)
// childnodes consider all things like new line,comments
console.log(x.children)
// children donot consider this above stuff

let nodename = x.childNodes[0].nodeName;
console.log(nodename)

let nodetype = x.childNodes[0].nodeType;
console.log(nodetype)

// some nodetype list

// 1 Element
// 2 Attribute
// 3 Text nodename
// 8 Comment
// 9 Document
// 10 doctype

// to get children of children

let y = document.querySelector('.container')
// console.log(y.children[0].children[0].children)

// to get first child
console.log(y.firstElementChild)
// to get last child
console.log(y.lastElementChild)
console.log(y.lastElementChild.style.background = "pink")

// count of child elements
console.log(y.childElementCount)

// to get siblings of container son/daughter
// console.log(y.firstElementChild.nextElementSibling)
console.log(y.firstElementChild.nextElementSibling.nextElementSibling)


// siblings are nodes that are children of the same parent
// head and body are siblings
