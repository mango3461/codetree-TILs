const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split(' ')
let [str1, str2] =input
if(str1.length>str2.length) console.log(str1,str1.length)
else if(str2.length>str1.length) console.log(str2,str2.length)
else console.log('same')