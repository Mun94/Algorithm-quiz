const test = `3
7`;
const input = test.split('\n');

const n = Number(input[0]);
const k = Number(input[1]);

let start = 1;
let end = 10 ** 10;
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += Math.min(parseInt(mid / i), n);
  }

  if (total >= k) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(result);

// 메모리 초과
// const test = `3
// 7`;
// const input = test.split('\n');
//
// const n = Number(input[0]);
// const k = Number(input[1]);
//
// const arr = [];
//
// for (let i = 1; i <= n; i++) {
//   const arr2 = [];
//
//   for (let j = 1; j <= n; j++) {
//     arr2.push(i * j);
//   }
//
//   arr.push(arr2);
// }
//
// const flatArr = arr.flat().sort((a, b) => a - b);
//
// console.log(flatArr[k]);