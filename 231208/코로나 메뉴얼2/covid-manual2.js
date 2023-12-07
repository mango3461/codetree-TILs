const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split('\n')
let arr=Array(4).fill(0)
for(let i=0;i<3;i++){
    let test = input[i].split(' ');
    let status = test[0]
    let temp = Number(test[1])
    if(status==='Y'&&temp>=37) {
        arr[0]++
    } else if(status==='N'&&temp>=37){
        arr[1]++
    } else if(status==='Y'&&temp<37){
        arr[2]++
    } else {
        arr[3]++
    }
}
if(arr[0]>=2) arr.push('E')
console.log(arr.join(' '))