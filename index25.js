// library

class Library{
    constructor(booklist) {
        this.booklist = booklist;
        this.issuedbook = {};
    }
    getbookList(){
this.booklist.forEach(element => {
    console.log(element)
});
    }
    issubook(bookname,user){
        if (this.issuedbook[bookname] == undefined){
            this.issuedbook[bookname] = user;
            console.log('congrats your book is issued')
        }
else{
    console.log("book already issed")
}
    }

returnbook(bookname){
delete this.issuedbook[bookname]
}
}