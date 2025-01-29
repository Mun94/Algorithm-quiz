// 다른 사람 풀이(524ms)
let test = `5
1 2 3 4 5`;

const input = test.toString().split('\n');
const balloon = input[1].split(' ').map(Number);

let result = 0;
const arrow = Array.from({ length: 1000001 }, () => 0);
for (let x of balloon) {
  if (!arrow[x]) {
    result += 1;
    arrow[x - 1] += 1;
  } else {
    arrow[x - 1] += 1;
    arrow[x] -= 1;
  }
}

console.log(result);

// 정답은 맞았지만 효율이 안 좋음(5572ms)
// let test = `5
// 4 5 2 1 4`;
//
// const input = test.toString().split('\n');
// const balloon = input[1].split(' ').map(Number);
//
// let height = -1;
// const collection = [];
// for (let i = 0; i < balloon.length; i++) {
//   height = balloon[i];
//
//   if (height > 0) {
//     const heightList = [];
//     for (let j = i; j < balloon.length; j++) {
//       if (height - 1 === balloon[j]) {
//         heightList.push(height);
//         height -= 1;
//         balloon[j] = -1;
//         balloon[i] = -1;
//       } else if (j === balloon.length - 1 && balloon[i] !== -1) {
//         balloon[i] = -1;
//         heightList.push(height);
//       }
//     }
//
//     collection.push(heightList);
//   }
// }
//
// console.log(collection.length);
