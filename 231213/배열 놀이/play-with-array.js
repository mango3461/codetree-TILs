const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split('\n')
let input0= input[0].split(' ').map(Number)
let input1= input[1].split(' ').map(Number)
let n= input0[0] // 원소의 수
let q= input0[1] // 질의의 수

for(let i=2; i<q+2;i++){
    let arr=input[i].split(' ').map(Number)
    if(arr[0] === 1){
        let a=arr[1]
        console.log(input[a-1])
    } else if(arr[0]===2){
        let a=0;
        for(let i=0;i<n;i++){
            if(input1[i] === arr[1]){
                a=i+1;
                break;
            }
        }
        console.log(a)
    } else if(arr[0]===3){
        let a=arr[1]
        let b=arr[2]
        console.log(input1.slice(a-1,b).join(' '))
    }
}