const test = `5
70 80 30 40 100
450`;

const input = test.toString().split('\n');
const n = Number(input[0]);
const budgetList = input[1].split(' ').map(Number);
const totalBudget = Number(input[2]);

const sumBudget = (midBudget) => {
  return budgetList.reduce((acc, cur) =>
    acc + (cur > midBudget ? midBudget : cur), 0);
}

let start = 0;
let end = Math.max(...budgetList);
let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  const sum = sumBudget(mid);

  if (sum <= totalBudget) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);

// 틀림
// const test = `4
// 120 110 140 150
// 485`;
//
// const input = test.toString().split('\n');
// const n = Number(input[0]);
// const budgetList = input[1].split(' ').map(Number);
// const totalBudget = Number(input[2]);
//
// const sumBudget = (midBudget) => {
//   let total = 0;
//
//   for (let i = 0; i < n; i++) {
//     const budget = budgetList[i];
//
//     total += midBudget < budget ? midBudget : budget;
//   }
//
//   return total;
// }
//
// const checkBudget = (maxBudget, isEnough = true) => {
//   let midBudget = Math.floor(maxBudget / 2);
//   let total = sumBudget(midBudget);
//
//   if (total > totalBudget) {
//     checkBudget(midBudget, false);
//   } else if(!isEnough){
//     while(total < totalBudget) {
//       midBudget++;
//       total = sumBudget(midBudget);
//     }
//     console.log(midBudget - 1);
//   } else {
//     console.log(Math.max(...budgetList));
//   }
// }
//
// checkBudget(totalBudget)
//
