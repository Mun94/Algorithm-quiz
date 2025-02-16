const test = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`;
const input = test.split('\n');
const n = Number(input[0]);
const cardList = input[1].split(' ').map(Number);
const m = Number(input[2]);
const findList = input[3].split(' ').map(Number);

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

const upperBound = (arr, target, start, end) => {
  while(start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return end;
}

const countByRange = (arr, leftValue, rightValue) => {
  const rightIndex = upperBound(arr, rightValue, 0, arr.length);
  const leftIndex = lowerBound(arr, leftValue, 0, arr.length);

  return rightIndex - leftIndex;
};

cardList.sort((a, b) => a - b);

let answer = '';
for (let i = 0; i < m; i++) {
  answer += countByRange(cardList, findList[i], findList[i]) + ' ';
}

console.log(answer);

// 맞음
// const test = `10
// 6 3 2 10 10 10 -10 -10 7 3
// 8
// 10 9 -5 2 3 4 5 -10`;
// const input = test.split('\n');
// const n = Number(input[0]);
// const cardList = input[1].split(' ').map(Number);
// const m = Number(input[2]);
// const findList = input[3].split(' ').map(Number);
//
// let cardInfo = {};
// for (let i = 0; i < n; i++) {
//   cardInfo[cardList[i]] = (cardInfo[cardList[i]] || 0) + 1;
// }
//
// let answer = '';
// for (let i = 0; i < m; i++) {
//   answer += (cardInfo[findList[i]] || 0) + ' ';
// }
//
// console.log(answer)