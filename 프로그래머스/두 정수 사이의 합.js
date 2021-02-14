/* 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.
입출력 예
a	b	return
3	5	12
3	3	3
5	3	12 */

function solution(a, b) {
  var answer = 0;

  if (a == b) {
    return a;
  } else if (a < b) {
    for (var i = a; i <= b; i++) {
      answer += i;
      answer;
    }
  } else {
    for (var i = b; i <= a; i++) {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(3, 3));
console.log(solution(3, 5));
console.log(solution(5, 3));

/////// 2번 방법

function solution2(n, m) {
  let re = 0;

  const max = Math.max(n, m);
  const min = Math.min(n, m);

  for (let i = min; i <= max; i++) {
    re += i;
  }

  return re;
}

console.log(solution2(5, 3));

///////// 3번 방법

function solution(a, b) {
  let max = Math.max.apply(null, [a, b]);
  let min = Math.min.apply(null, [a, b]);

  return Array.from({ length: max - min + 1 }, (_, idx) => {
    return min + idx;
  }).reduce((acc, val) => {
    return (acc += val);
  }, 0);
}

console.log(solution(3, 5));
