const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split(' ').map(Number)
let arr=Array(10).fill(0)

for(let i=0; i<100;i++){
    if(input[i]===0) break;
    let x = parseInt(input[i] / 10)
    arr[x]++
}

for(let i=1;i<10;i++){
    console.log(`${i} - ${arr[i]}`)
}