const fs= require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')
let n = Number(input[1])
let len = input[0].length;
let str = ''
for(let i = len-1; i>=len-n;i--) {
    str +=input[0][i]
}
console.log(str)