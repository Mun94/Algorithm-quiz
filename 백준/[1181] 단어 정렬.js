/* 백준 정답
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i]);
}
arr = [...new Set(arr)];

arr.sort((a, b) => {
    return a.length === b.length ? a.localeCompare(b) : a.length - b.length;
});

for (let x of arr) {
    console.log(x)
}
*/

const solution = (arr) => {
   const set = new Set(arr);

   return Array.from(set).sort((a, b) => {
     return a.length === b.length ? a.localeCompare(b) : a.length - b.length;
   })
}

console.log(solution(['but', 'i', 'wont', 'hesitate', 'no', 'more', 'no', 'more', 'it', 'cannot', 'wait', 'im', 'yours'])); // ['i', 'im', 'it', 'no', 'but', 'more', 'wait', 'wont', 'yours', 'cannot', 'hesitate']