const fs=require('fs')
let n=Number(fs.readFileSync(0).toString().trim())
let arr=[];

for(let i=1;i<=10;i++){
    arr.push(n*i)
}
console.log(arr.join(' '))