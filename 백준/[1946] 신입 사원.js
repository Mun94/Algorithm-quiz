// 다른 모든 지원자와 비교했을 때 서류심사 성적과 면접시험 성적 중 적어도 하나가 다른 지원자보다 떨어지지 않는 자만 선발
// X = 서류심사, Y = 면접시험
// 우선, X를 기준으로 오름차순 정렬한다.
// A 지원자: [1, 4] -> A 지원자는 일단 X가 1등이므로, 무조건 선발 가능
// B 지원자: [2, 3] -> B 지원자는 X가 2등이므로, A 보다 Y가 작으면 선발 가능
// C 지원자: [3, 2] -> C 지원자는 X가 3등이므로, A, B 보다 Y가 작으면 선발 가능
// D 지원자: [4, 1] -> D 지원자는 X가 4등이므로, A, B, C 보다 Y가 작으면 선발 가능
// E 지원자: [5, 5] -> E 지원자는 X가 5등이므로, A, B, C, D 보다 Y가 작으면 선발 가능
// 위와 같이, X를 기준으로 오름차순 정렬한 뒤, Y 순위를 확인하며 현재까지 확인했던 Y 중에서 가장 작은 수라면 카운트하면 된다.

let test = `2
5
3 2
1 4
4 1
2 3
5 5
7
3 6
7 3
4 2
1 4
5 7
2 5
6 1`;

const input = test.toString().split('\n');

let testCase = Number(input[0]);
let line = 1;

for (let tc = 0; tc < testCase; tc++) {
  n = Number(input[line]);
  const arr = [];

  for (let i = line + 1; i <= line + n; i++) {
    const data = input[i].split(' ').map(Number);
    arr.push(data);
  }

  arr.sort((x, y) => x[0] - y[0]);
  let count = 0;
  let minValue = 100001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      count += 1;
      minValue = y;
    }
  }

  console.log(count);
  line += n + 1;
}