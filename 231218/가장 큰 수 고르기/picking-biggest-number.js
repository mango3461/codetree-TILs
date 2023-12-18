const fs= require('fs')
let input =fs.readFileSync(0).toString().trim().split(' ').map(Number)
let max_num = Number.MIN_SAFE_INTEGER
for(let i = 0; i<input.length;i++){
    if(max_num < input[i]) max_num = input[i]
}
console.log(max_num)