const fs=require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')
let n=Number(input[0])
let arr=input[1].split(' ').map(Number)
let cnt=0;
for(let i=0; i<n;i++){
    let x=arr[i]
    if(x===2) cnt++
    if(cnt===3) {
        console.log(i+1)
        break;
    }
}