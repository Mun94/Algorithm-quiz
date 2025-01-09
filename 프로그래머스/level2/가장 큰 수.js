function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer;
}

console.log(solution([6, 10, 2])); // 6210
console.log(solution([3, 30, 34, 5, 9])); // 9534330
console.log(solution([0, 0, 1000])); // 100000
console.log(solution([0, 0, 0])); // 000

// 런타임 에러 발생 (너무 많은 조합 생성, 잘못된 접근)
function getPermutations(arr, r) {
  const result = [];

  if (r === 1) return arr.map(num => [num]);

  arr.forEach((fixed, index) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];

    const permutations = getPermutations(rest, r - 1);

    const attached = permutations.map(perm => [fixed, ...perm]);

    result.push(...attached);
  });

  return result;
}

const solution2 = (numbers) => {
  const permutations = getPermutations(numbers, numbers.length);

  let result = 0;

  for (let i = 0; i < permutations.length; i++ ) {
    const permutation = permutations[i].join('');

    if (result < permutation) {
      result = permutation;
    }
  }

  return result;
}

console.log(solution2([6, 10, 2])); // 6210
console.log(solution2([3, 30, 34, 5, 9])); // 9534330