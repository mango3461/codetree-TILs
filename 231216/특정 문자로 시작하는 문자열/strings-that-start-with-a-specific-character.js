const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split('\n')
let n=Number(input[0])
let a=input[n+1]
let sum=0;
let cnt=0;

for(let i=1;i<=n;i++){
    if(input[i][0]===a){
        sum+=input[i].length
        cnt++
    }
}
console.log(cnt, (sum/cnt).toFixed(2))