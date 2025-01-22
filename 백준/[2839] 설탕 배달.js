// 1) 현재 값이 5로 나누어 떨어지는 경우, 5로 나누면 된다.
// 2) 그렇지 않다면, 기존의 값이 5로 나누어 떨어지는 값이 될 때까지 3을 빼준 뒤에 1)을 수행한다.

const test = '12';
const input = test.toString();

let n = Number(input);
let result = 0;
let flag = false;

while (n >= 0) {
  if (!n || n % 5 === 0) {
    result += parseInt(n / 5);
    flag = true;
    break;
  }

  n -= 3;
  result += 1;
}

console.log(flag ? result : -1)
