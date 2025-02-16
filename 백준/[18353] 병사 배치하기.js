let test =`7
15 11 4 8 5 2 4`;
const input = test.split("\n");
const n = Number(input[0]);
const list = input[1].split(" ").map(Number);

list.reverse();

const lowerBound = (arr, target, start, end) => {
  while(start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

const d = [0];

for (x of list) {
  if (d[d.length - 1] < x) {
    d.push(x);
  } else {
    const idx = lowerBound(d, x, 0, d.length);
    d[idx] = x;
  }
}

console.log(n - (d.length - 1));


// let test =`7
// 15 11 4 8 5 2 4`;
// const input = test.split("\n");
// const n = Number(input[0]);
// const list = input[1].split(" ").map(Number);
//
// const soldiers = list.reduce((acc, cur, idx) => {
//   acc.push({ power: cur, idx: idx + 1 });
//
//   return acc;
// }, []);
//
// soldiers.sort((a, b) => b.power - a.power);
//
// let result = 0;
// for (let i = 0; i < n - 1; i++) {
//   const soldier = soldiers[i];
//
//   if (soldier.idx > soldiers[i + 1].idx) {
//     result++;
//   }
// }
// console.log(result);