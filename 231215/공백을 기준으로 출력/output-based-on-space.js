const fs=require('fs')
let input =fs.readFileSync(0).toString().trim().split('\n');
let str=''
for(let i=0;i<=1;i++){
    let n=input[i]
    for(let j=0;j<n.length;j++){
        if(n[j]!==' ') str+=n[j]

    }
}
console.log(str)