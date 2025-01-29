const test = `4
2 3 1
5 2 4 1`;

const input = test.toString().split('\n');
const km = input[1].split(' ').map(Number);
let minPrice = 1000000000;
const price = input[2].split(' ').reduce((acc, curr) => {
  const p = Number(curr);

  if (p < minPrice) {
    minPrice = p;
  }

  acc.push(minPrice);

  return acc;
}, []);

let totalPrice = BigInt(0);
for (let i = 0; i < price.length - 1; i++) {
  totalPrice += BigInt(price[i]) * BigInt(km[i]);
}

console.log(String(totalPrice));

// 58점
// const test = `4
// 2 3 1
// 5 2 4 1`;
//
// const input = test.toString().split('\n');
// const n = Number(input[0]);
// const km = input[1].split(' ').map(Number);
// let minPrice = 10000;
// const price = input[2].split(' ').reduce((acc, curr) => {
//   const p = Number(curr);
//
//   if (p < minPrice) {
//     minPrice = p;
//   }
//
//   acc.push(minPrice);
//
//   return acc;
// }, []);
//
// let totalPrice = 0;
// for (let i = 0; i < n - 1; i++) {
//   totalPrice += price[i] * km[i];
// }
//
// console.log(totalPrice);

// 틀림
// let totalPrice = 0;
// for (let i = 0; i < price.length - 1; i++) {
//   if (!i) {
//     totalPrice += price[i] * km[i];
//   } else {
//     for (let j = i + 1; j < price.length; j++) {
//       if (price[i] <= price[j]) {
//         totalPrice += price[i] * (km[j - 1] + km[j]) || 0;
//         break;
//       }
//     }
//   }
// }
// console.log(totalPrice);