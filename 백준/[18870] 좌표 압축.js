const solution = (arr) => {
  const info = {};
  [...new Set(arr)].sort((a, b) => a - b).forEach((num, index) => {
    info[num] = index;
  });

  let result = ''
  for (let x of arr) {
    result += info[x] + ' ';
  }

  return result;
}

console.log(solution([2, 4, -10, 4, -9])) // 2, 3, 0, 3, 1
console.log(solution([1000, 999, 1000, 999, 1000, 999])) // 1, 0, 1, 0, 1, 0;