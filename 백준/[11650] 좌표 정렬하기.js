/* 백준 정답
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const data = [];
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  data.push([x, y]);
}

data.sort((a, b) => {
  return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
});

let answer = '';
for (let item of data) {
  answer += item[0] + ' ' + item[1] + '\n';
}

console.log(answer)
*/

const solution = (arr) => {
  return arr.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  })
}

console.log(solution([[3, 4], [1, 1], [1, -1], [2, 2], [3, 3]]));