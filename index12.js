console.log("hello")
// LocalStorage object allows you to save key/value pairs in the browser. Note. 

// session storage is avilable only when browser is on
let imparr = ['one','two'];
// setting data to local storage => key value pair
localStorage.setItem('name','shanky');
localStorage.setItem('fame','prince');
// localStorage.removeItem('fame');

// to convert it into string
localStorage.setItem('num',JSON.stringify(imparr))
// to clear local storage

// to remove a key value pair
// console.log(localStorage.getItem('fame'))
// localStorage.clear();
let Name = localStorage.getItem('name');
Name = JSON.parse(localStorage.getItem('num'))
console.log(Name)


