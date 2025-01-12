const solution = (citations) => {
  let h = 0;
  let count = 0;

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= h) {
      count++;
    }

    if (i === citations.length - 1) {
      if (count >= h) {
        i = -1;
        count = 0;
        h++;
      } else {
        break;
      }
    }
  }

  return h - 1;
}

console.log(solution( [4, 4, 4, 4, 4])) // 4
console.log(solution(  [10, 8, 5, 4, 3])) // 4
console.log(solution( [25, 8, 5, 3, 3])) // 3
console.log(solution(  [6, 6, 6, 6, 6, 1])) // 5
console.log(solution( [4, 4, 4, 4, 4])) // 4
console.log(solution( [2, 2, 2, 2])) // 2
console.log(solution([3, 10, 11])) // 3
console.log(solution( [100, 100, 100, 100, 100])) // 5