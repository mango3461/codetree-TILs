const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split(' ')
let arr=Array(6).fill(0)
for(let i =0;i<10;i++){
    arr[input[i]-1]++
}
for(let i=1;i<=6;i++){
    console.log(`${i} - ${arr[i-1]}`)
}