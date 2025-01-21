const test = '5\n3 1 4 3 2';

const input = test.toString().split('\n');

const n = Number(input[0]);
const m = input[1].split(' ').map(Number);

m.sort((a, b) => a - b);

let result = 0;
m.reduce((acc, cur) => {
  acc += cur;

  result += acc;

  return acc;
}, 0);

console.log(result);