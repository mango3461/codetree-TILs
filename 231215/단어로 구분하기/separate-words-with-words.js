const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split(' ')
for(let i=0;i<=input.length-1;i++){
    console.log(input[i])
}