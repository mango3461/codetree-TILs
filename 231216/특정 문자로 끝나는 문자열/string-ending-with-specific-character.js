const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split('\n')
let cnt=0;
for(let i=0;i<10;i++){
    let str=input[i]
    if(str[str.length-1]===input[10]) {
        console.log(str)
        cnt++
    }
}
if(cnt===0) console.log('None')