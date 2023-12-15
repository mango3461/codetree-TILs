const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split('\n')
let n=Number(input[0])
let strLen=0;
let aCnt=0;
for(let i=1;i<=n;i++){
    strLen += input[i].length;
    if(input[i][0]==='a')aCnt++
}
console.log(strLen,aCnt)