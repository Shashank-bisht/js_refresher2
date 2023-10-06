// console.log("hello")

// callback functions

// assume this is coming from the server
const students = [
    {name: "shanky", sub:"java"},
    {name: "hello", sub:"ml"}
]

function enrollstudents(student,call){
    setTimeout(() => {
        students.push(student)
        console.log("student have been enrolled")
        call();
    }, 3000);
}
function getstudents(){
    setTimeout(() => {
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        })
        document.getElementById('students').innerHTML = str;
        console.log("student have been fetched")
    }, 2000);
}

let newstudent = {name:"sss", subject:"python"}
enrollstudents(newstudent, getstudents)
// getstudents();