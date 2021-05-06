const solution = (n) => {
  let arr = [1, 2];

  for (let i = 0; i < n; i++) {
    arr[2 + i] = arr[i] + arr[i + 1];
  }

  return arr[n - 1] % 1000000007;
};

console.log(solution(5));
