const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split('\n')
let inputArr=input[0].split(' ').map(Number)
let n=inputArr[0]
let m=inputArr[1]
let nArr=input[1].split(' ').map(Number)
let cnt=0;
for(let i=0;i<n;i++){
    if(m===nArr[i])cnt++
}
console.log(cnt)