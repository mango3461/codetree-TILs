const fs =require('fs')
let input = fs.readFileSync(0).toString().trim();
let len = input.length;
let n = 0;
if(len%2===0) n=len-1;
else n = len-2;
let str=''
for(let i =n; i>=0;i-=2) {
    str+=input[i]
}
console.log(str)