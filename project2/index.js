

// add method to display prototype
Display.prototype.add = function(book){
    console.log("adding..")
    tablebody = document.getElementById('tablebody')
    let uistring = `<tr>       
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    <td><button type="button" id="delete" class="btn btn-primary">Delete</button></td>
  </tr>      `
  tablebody.innerHTML += uistring
}


// console.log("hello this is shanky")

function Book(name,author,type){
this.name = name;
this.type = type;
this.author = author;
}

//display constructor
function Display(){

} 




// impliment the clear function
Display.prototype.clear = function(){
    let libraryform = document.getElementById("libraryform")
    libraryform.reset()
}

// let dlt = document.getElementById('delete')
// dlt.addEventListener('click',clean)
// function clean(){
//     localStorage.clear()
// }

// impliment the validate function
Display.prototype.validate = function(book){
    if (book.name.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show = function(type,dmessage){
    let message = document.getElementById('message')
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message</strong> ${dmessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
  setTimeout(() => {
      message.innerHTML = ""
  }, 3000);
}


//add submit eventlistner to form
let libraryform = document.getElementById("libraryform")

libraryform.addEventListener('submit',libraryformsubmit)

function libraryformsubmit(e){
    e.preventDefault();
    console.log("you have submitted form")
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction')
    let coding = document.getElementById('coding')
    let cooking = document.getElementById('cooking')
let type;
    if(fiction.checked){
        type = fiction.value;
    }
    else if(coding.checked){
        type = coding.value;
    }
    else if(cooking.checked){
        type = cooking.value
    }
    let book = new Book(name,author,type)
    console.log(book)

    let display = new Display()
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show("success",'Your book has been added')
    }
    else{
        display.show("danger","sorry you cannot add")
    }
    
}
