const test = `4 11
802
743
457
539`;
const input = test.split('\n');
const [n, tobe] = input.shift().split(' ').map(Number);
const lines = input.map(Number);

let start = 0;
let end = Math.max(...lines);
let result = 0;

const sumTotal = (mid) => {
  return lines.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);
}

while(start <= end) {
  const mid = Math.floor((start + end) / 2);
  const total = sumTotal(mid);

  if (total < tobe) {
    end = mid - 1; // 만들 수 있는 랜선의 개수가 부족한 경우 길이 줄이기
  } else {
    result = mid;
    start = mid + 1; // 만들 수 있는 랜선의 개수가 충분한 경우 길이 늘이기
  }
}

console.log(result);