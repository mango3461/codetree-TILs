const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split(' ').map(Number)
let arr=[]
for(let i=0;i<100;i++){
    arr=input.filter(ele=> ele!==0).map(ele => {
        return ele % 2 !== 0 ? ele + 3 : ele / 2;
    })
}
console.log(arr.join(' '))