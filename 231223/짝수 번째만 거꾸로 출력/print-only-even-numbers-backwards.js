const fs =require('fs')
let input = fs.readFileSync(0).toString().trim();
let len = input.length;
let str=''
for(let i =len-1; i>=0;i-=2) {
    str+=input[i]
}
console.log(str)