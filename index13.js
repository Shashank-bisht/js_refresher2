let str = "python";
let link = document.links;
console.log(link)
let href;
Array.from(link).forEach(function(element){href = element.href;
if(href.includes(str)){
    console.log(href);
}})