function solution(n, times) {
  const sortTime = times.sort((a, b) => a - b);
  let min = 0;
  let max = n * sortTime[times.length - 1];
  let mid = Math.floor((min + max) / 2);

  while (min <= max) {
    const sum = times.reduce((res, cur) => res + Math.floor(mid / cur), 0);

    if (sum >= n) {
      max = mid - 1;
    } else if (sum < n) {
      min = mid + 1;
    }

    mid = Math.floor((min + max) / 2);
  }

  return min;
}

console.log(solution(6, [7, 10]));
