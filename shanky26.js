// promises in javascript
console.log("hellos")
function func1()
{
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error = True;
            if(!error){ console.log("your promise is resolved")
            resolve();}
            else{
                console.log("not resolved")
            }
           reject();
        }, 2000);
    })
}
func1().then