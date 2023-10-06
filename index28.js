// console.log("hello")

// fetch api - two .then is used
// gives a promise

// fetch is used to get data from the server
// button with id mybtn
// let mybtn = document.getElementById("mybtn");

// div with id content
// let content = document.getElementById("content")

// function getData(){
//     console.log("Starting getData")
//     url = "shanky.txt";
//     fetch(url).then((response)=>{
//         console.log("inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("inside second then")
//         console.log(data)
//     })
// }

// function getData(){
//     console.log("Starting getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("inside second then")
//         console.log(data)
//     })
// }
// console.log("before running getData")
// getData()
// console.log("after running getData")

// using post request

function postData(){
    url = "https://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"shanky123","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:data

    }
    fetch(url,params).then((response)=>{     
        return response.json();
    }).then((data)=>{
        
        console.log(data)
    })
}
postData()