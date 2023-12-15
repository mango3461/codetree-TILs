const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split('\n')

for(let i=0;i<10;i++){
    let str=input[i]
    if(str[str.length-1]===input[10]) console.log(str)
}