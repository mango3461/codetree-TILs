const fs =require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n');
let arr = input[1].split(' ').map(Number)
let minVal = Number.MAX_SAFE_INTEGER;
let cnt = 0;
for(let elem of arr) {
    if(minVal > elem) minVal = elem
}
for(let elem of arr) {
    if(minVal === elem) cnt++
}
console.log(minVal, cnt)