// 가능한 작은 수부터 더하는 것이 좋다
// 예를 들어, S = 200일 때, 1부터 시작하여 차례대로 더하면서, 합이 S를 넘어가지 않도록 한다.
// 1,2,3 ... 순서대로 더해갈 때, S를 넘지 않도록 하되, 최대한 많이 더한다.

const test = '8';
let input = Number(test);
let sum = 0;
let curr = 0;

while (sum <= input) {
  console.log(sum, curr)
  curr += 1;
  sum += curr
}

console.log(curr - 1);