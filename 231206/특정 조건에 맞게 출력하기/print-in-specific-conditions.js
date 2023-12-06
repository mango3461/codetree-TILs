const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let arr = input;

let index = arr.findIndex(ele => ele === 0);

if (index !== -1) {
    arr.splice(index);
}
arr = arr.map(ele => ele % 2 !== 0 ? ele + 3 : ele / 2);

console.log(arr.join(' '));