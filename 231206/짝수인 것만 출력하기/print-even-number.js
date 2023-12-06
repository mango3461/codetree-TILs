const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split('\n')
let n=Number(input[0])
let arr=input[1].split(' ')
let result=[]
for(let i=0;i<n;i++){
    if(arr[i]%2===0)result.push(arr[i])
}
console.log(result.join(' '))