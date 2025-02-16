const test = `5 20
4 42 40 26 46`;
const input = test.split('\n');
const [n, leftoverTree] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...trees);
let result = 0;

const sumLeftover = (mid) => {
  return trees.reduce((acc, cur) => {
    return acc + (cur - mid > 0 ? cur - mid : 0);
  }, 0)
}

while (start <= end) {
  const mid  = Math.floor((start + end) / 2);
  const currLeftoverTree = sumLeftover(mid);

  if (leftoverTree <= currLeftoverTree) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);