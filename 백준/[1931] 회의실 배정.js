const test = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`;

const input = test.toString().split('\n');
const arr = [];

for (let i = 1; i <= Number(input[0]); i++) {
  arr.push(input[i].split(' ').map(Number));
}

arr.sort((a, b) => {
  return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1];
});

const schedule = {
  toTime: -1,
};
let emptyRoom = 0;
for (let i = 0; i < arr.length; i++) {
  const fromTime = Number(arr[i][0]);
  const toTime = Number(arr[i][1]);

  if (fromTime >= schedule.toTime) {
    schedule.toTime = toTime;
    emptyRoom += 1;
  }
}
console.log(emptyRoom);

// 틀림
// const test = `11
// 1 4
// 3 5
// 0 6
// 5 7
// 3 8
// 5 9
// 6 10
// 8 11
// 8 12
// 2 13
// 12 14`;
//
// const input = test.toString().split('\n');
// const arr = [];
//
// for (let i = 1; i <= Number(input[0]); i++) {
//   arr.push(input[i].split(' ').map(Number));
// }
//
// const schedule = {
//   toTime: -1,
// };
// let emptyRoom = 0;
// for (let i = 0; i < arr.length; i++) {
//   const fromTime = Number(arr[i][0]);
//   const toTime = Number(arr[i][1]);
//
//   if (fromTime >= schedule.toTime) {
//     schedule.toTime = toTime;
//     emptyRoom += 1;
//   }
// }
// console.log(emptyRoom);