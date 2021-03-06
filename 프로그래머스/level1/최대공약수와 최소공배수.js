/*
문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
두 수는 1이상 1000000이하의 자연수입니다.
입출력 예
n	m	return
3	12	[3, 12]
2	5	[1, 10]
입출력 예 설명
입출력 예 #1
위의 설명과 같습니다.

입출력 예 #2
자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.
*/

function n_m_array(v, array) {
  if (0 < v && v <= 1000000) {
    for (let i = 1; i <= v; i++) {
      if (v % i === 0) {
        array.push(i);
      }
    }
  } else {
    return null;
  }
}

function solution(n, m) {
  let n_array = [];
  let m_array = [];

  n_m_array(n, n_array);
  n_m_array(m, m_array);

  for (let i = 0; i < n_array.sort((a, b) => b - a).length; i++) {
    if (m_array.some((v) => v === n_array[i])) {
      n_array = n_array[i];
      break;
    }
  }

  m_array =
    (Math.max.apply(null, new Array(n, m)) / n_array) *
    Math.min.apply(null, new Array(n, m));

  return [n_array, m_array];
}

console.log(solution(60, 48));

///////// 2번 방법

function solution2(n, m) {
  let max = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }

  let min =
    (Math.max.apply(null, new Array(n, m)) / max) *
    Math.min.apply(null, new Array(n, m));

  return [max, min];
}

console.log(solution2(10, 60));

//////////// 3번

function solution(n, m) {
  let max = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && m % i === 0) max = i;
  }

  let aa = Math.max.apply(null, [n, m]);
  let bb = Math.min.apply(null, [n, m]);

  let min = (aa / max) * bb;
  return [max, min];
}

console.log(solution(2, 5));

//////////// 4번

function solution(n, m) {
  let max = Math.max(n, m);
  let min = Math.min(n, m);
  let _1 = 0;

  for (let i = min; i >= 1; i--) {
    if (max % i === 0 && min % i === 0) {
      _1 = i;
      break;
    }
  }

  let _2 = (max / _1) * min;

  return [_1, _2];
}

console.log(solution(3, 12));
