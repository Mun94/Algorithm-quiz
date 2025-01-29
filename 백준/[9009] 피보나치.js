// 피보나치 수: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
// 명제: 양의 정수는 하나 혹은 그 이상의 서로 다른 피보나치 수들의 합으로 나타낼 수 있다.
//   예를 들어, 정수 100은 다음과 같은 조합으로 표현할 수 있다.
//   100 = 3 + 8 + 89
//   100 = 1 + 2 + 8 + 89
//   100 = 3 + 8 + 34 + 55
// [문제 해결 방법] 가능한 가장 큰 피보나치 수부터 빼 나갈 때 최소 개수를 만족할 수 있다.
//   - 이유: X - A는 A보다 작은 서로 다른 피보나치 수들의 합으로 표현 가능하다.
//   - 이때, A는 가능한 가장 큰 피보나치 수를 의미한다.

const test = `4
100
200
12345
1003`;

const input = test.toString().split('\n').map(Number);
const testCases = input.shift();

const pibo = [0, 1];
while (pibo[pibo.length - 1] < (10 ** 9)) {
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
}

for (let i = 0; i < testCases; i++) {
  let n = Number(input[i]);
  let j = pibo.length - 1;
  const result = [];

  while (n > 0) {
    if (n >= pibo[j]) {
      n -= pibo[j];
      result.push(pibo[j]);
    }
    j--;
  }

  // 출력을 위한 로직
  let answer = '';
  for (let k = result.length - 1; k >= 0; k--) { // 오름차순 출력
    answer += result[k] + ' ';
  }
  console.log(answer);
}