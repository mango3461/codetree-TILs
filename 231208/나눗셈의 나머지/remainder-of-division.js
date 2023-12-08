const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split(' ').map(Number)
let a=input[0]
let b=input[1]
let arr=Array(b).fill(0)
let sum=0;
while(true){
    if(a<=1)break;
    arr[a%b]++
    a = parseInt(a/b)
}

for(let i=0;i<b;i++){
    if(arr[i] !== 0) sum += arr[i]**2
}
console.log(sum)