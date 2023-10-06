// Metacharcter in regular expression

// let regex = /shashank/;

// lets jump into meta character

regex = /^shashank/ //should starts with

regex = /nk$/ //should ends with

regex = /sha*hank/ //* ki jagha eak letter aiga



let str = "shashank is a good boy like shashank"

let res = regex.exec(str)
console.log(res)

if(regex.test(str)){
    console.log(`the string ${str} matches the expression ${regex.source}`)
}else{
    console.log(`the string ${str} do not matches the expression ${regex.source}`)
}