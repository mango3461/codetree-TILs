const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split('\n')
let n=input[0].split(' ').map(Number)
let n1=n[0]
let n2=n[1]
let a=input[1].split(' ').map(Number)
let b=input[2].split(' ').map(Number)

for(let i=0;i<n1;i++){
    let a1 =a.slice(i,i+n2)
    if(a1===b){
        console.log('Yes')
        break;
    }
    if(i===(n1-1)) console.log('No')
}