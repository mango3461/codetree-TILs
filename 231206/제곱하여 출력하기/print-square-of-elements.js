const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split('\n')
let n=Number(input[0])
let arr=input[1].split(' ').map(Number)
let result=[]
for(let i=0;i<n;i++){
    result.push(arr[i]**2)
}
console.log(result.join(' '))