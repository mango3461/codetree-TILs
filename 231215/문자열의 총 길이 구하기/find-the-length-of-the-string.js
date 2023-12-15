const fs=require('fs');
let input=fs.readFileSync(0).toString().trim()
let cnt=0;
for(let i=0;i<input.length;i++){
    if(input[i]!==' ')cnt++
}
console.log(cnt)