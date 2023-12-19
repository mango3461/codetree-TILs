const fs =require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number)
let maxVal = input[0]
let minVal = input[0]

for(let elem of input){
    if(elem>=999 || elem <= -999) break;
    if(maxVal <elem)maxVal = elem
    if(minVal >elem)minVal = elem
}
console.log(maxVal,minVal)