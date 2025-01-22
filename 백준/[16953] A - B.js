// A에서 B가 아닌 B에서 A로 이동한다고 생각하면 된다.
// 값이 2로 나누어 떨어지는 경우 -> 2로 나누는 연산 사용
// 일의 자릿수가 1인 경우 -> 10으로 나누는 연산 사용
// 위 경우가 모두 해당되지 않으면 종료

const test = '2 162';
let [a, b] = test.toString().split(' ').map(Number);

let result = 1;
let flag = false;

while (a <= b) {
  if (a === b) {
    flag = true;
    break;
  }

  if (b % 2 === 0) {
    b = parseInt(b / 2);
  } else if (b % 10 === 1) {
    b = parseInt(b / 10);
  } else {
    break;
  }

  result += 1;
}

console.log(flag ? result : -1);