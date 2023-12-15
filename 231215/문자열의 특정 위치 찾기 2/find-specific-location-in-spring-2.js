const fs=require('fs')
let input=fs.readFileSync(0).toString().trim()
let str=["apple", "banana", "grape", "blueberry", "orange"]
let cnt=0;
for(let i=0;i<5;i++){
    let n=str[i]
    for(let j=2;j<4;j++){
        if(n[j]===input){
            console.log(n)
            cnt++
        }
    }
}
console.log(cnt)