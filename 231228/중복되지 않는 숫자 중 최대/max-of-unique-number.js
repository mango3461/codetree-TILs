const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let frequency = {};

for (let num of arr) {
    if (frequency[num] === undefined) {
        frequency[num] = 1;
    } else {
        frequency[num]++;
    }
}

let maxUnique = -1;

for (let num in frequency) {
    if (frequency[num] === 1 && Number(num) > maxUnique) {
        maxUnique = Number(num);
    }
}

console.log(maxUnique);