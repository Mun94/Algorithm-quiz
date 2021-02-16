function solution(d, budget) {
  let result = 0;

  return Math.max.apply(
    null,
    d
      .sort((a, b) => a - b)
      .map((m, index) => {
        result += m;
        if (result <= budget) {
          return index + 1;
        } else {
          return 0;
        }
      })
  );
}

console.log(solution([1, 10, 9, 3, 2, 2, 1, 4, 2, 3], 10));

//////////////// 2번 방법

function solution2(d, bud) {
  let result = 0;
  return (
    d
      .sort((a, b) => a - b)
      .map((val, idx) => {
        result += val;
        if (result <= bud) {
          return idx + 1;
        }
      })
      .filter((q) => q)
      .pop() || 0
  );
}

console.log(solution2([11, 12], 10));

////////////////// 3번 방법

function solution(d, bud) {
  let sort = d.sort((a, b) => a - b);
  let result = 0;
  if (sort[0] > bud) {
    return 0;
  }
  return (
    sort
      .map((val, idx) => {
        result += val;
        if (result > bud) {
          return idx;
        }
      })
      .filter((q) => q)[0] || d.length
  );
}

console.log(solution([1, 3, 2, 5, 4], 9));
