const fs=require('fs')
let input=fs.readFileSync(0).toString().trim().split('\n')
let [str1,str2,str3]=input
let len1 = str1.length, len2 = str2.length, len3 = str3.length;
let maxLength = Math.max(len1, len2, len3);
let minLength = Math.min(len1, len2, len3);

let difference = maxLength - minLength;
console.log(difference);