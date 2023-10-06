// AJAX is not a language it stands for asyncronous javascript and XLM

// AJAX helps in fetching data asynchronously without interfering with the existing page

// no page reload
// moder website use JSON instead of XLM for data transfer

// how AJAX works

// AJAX uses XLM HtppsRequest object (XLMHR) to achieve this

// ṃost website use JSON instead of XML for data transfer

let fetchBtn = document.getElementById("fetchbtn");
fetchBtn.addEventListener('click',buttonclickhandler)

function buttonclickhandler(){
    console.log("you clicked btn")
    // xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    // true meaning we have enabled async = true

    // using get request
    // xhr.open('GET','shanky.txt',true)

    // using post request
    // xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true)
    // xhr.setRequestHeader("Content-Type", "application/json");

    // what to do on progress
    xhr.onprogress = function(){
        console.log("on progress")
    }
    // what to do when response is ready
    xhr.onload = function(){
      if(this.status === 200){
        console.log(this.responseText)
      }else{
          console.error("some error occured!!")
      }
    }
    // send the request
    // params = 	{"name":"test111","salary":"123","age":"23"}
    // xhr.send(params)
    xhr.send()
    console.log("hello")
}

