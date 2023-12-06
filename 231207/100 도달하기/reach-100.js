const fs=require('fs')
let n=Number(fs.readFileSync(0).toString().trim())
let arr=[1, n]

for(let i=2;i<100;i++){
    arr.push(arr[i-2]+arr[i-1])
    if(arr[i]>=100)break;
}
console.log(arr.join(' '))