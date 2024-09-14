const solution = (n, times) => {
  let left = 1;
  let right = Math.max(...times) * n;
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0;

    for (let i = 0; i < times.length; i++) {
      sum += Math.floor(mid / times[i]);
    }

    if (sum < n) {
      left = mid + 1;
    } else {
      if (mid < answer) {
        answer = mid;
      }
      right = mid - 1;
    }
  }

  return answer;
}

console.log(solution(6, [7, 10])) // 28