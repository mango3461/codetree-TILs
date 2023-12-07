const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split(' ').map(Number)
let arr = Array(11).fill(0);

for(let i=0;i<100;i++){
    if(input[i] ===0)break;
    arr[parseInt(input[i]/10)]++
}

for(let i=10;i>=1;i--){
    console.log(`${i}0 - ${arr[i]}`)
}