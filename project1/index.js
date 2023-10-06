// if user adds a note, add it to the localstorage
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click",function(e){
    let addtxt = document.getElementById("addtxt");
    // to get item in notes
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }else{
        notesobj = JSON.parse(notes)
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    // to remove after we add a note
    addtxt.value = "";
    console.log(notesobj)
    shownotes();
    
})
// to display notes
function shownotes(){
    
        let notes = localStorage.getItem("notes");
        if(notes == null){
            notesobj = [];
        }else{
            notesobj = JSON.parse(notes)
        }
        let html = "";
        notesobj.forEach(function(element,index){
            html += `<div class=" notecard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}"onclick="deletenote(this.id)" class="btn btn-primary">Delete Notes</button>
            </div>
        </div>`
        })
        let notesElm = document.getElementById('notes')
        if(notes.length!=0){
            notesElm.innerHTML=html;
        }
        else{
            console.log("write something")
        }
    
    
}

// function to delete note

function deletenote(index){
    console.log("i am deleting",index)
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }else{
        notesobj = JSON.parse(notes)
    }
    notesobj.splice(index,1)
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
}

searchtxt = document.getElementById('searchtxt')
searchtxt.addEventListener('input',function(){
    console.log("iiii")
    let inputval = searchtxt.value.toLowerCase()
    console.log(inputval)
    let notecard = document.getElementsByClassName("notecard")
    Array.from(notecard).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardtxt)
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none"
        }
    })
})
