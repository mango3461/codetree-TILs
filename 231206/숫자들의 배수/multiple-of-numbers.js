const fs=require('fs')
let n=Number(fs.readFileSync(0).toString().trim())
let arr=[];
let cnt=0;
for(let i=1;i<=10;i++){
    arr.push(n*i)
    if((n*i)%5===0)cnt++
    if(cnt===2) break;

}
console.log(arr.join(' '))