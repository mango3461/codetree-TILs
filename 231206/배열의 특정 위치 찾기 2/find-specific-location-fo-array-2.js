const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split(' ').map(Number)
let sumOdd=0
let sumEven=0

for(let i=0;i<10;i++){
    if(i%2===0){
        sumOdd+=input[i]
    }else{
        sumEven+=input[i]
    }
}

if(sumEven>=sumOdd) console.log(sumEven-sumOdd)
else console.log(sumOdd-sumEven)