const solution = (dots) => {
  const [
    [x1, y1],
    [x2, y2],
    [x3, y3],
    [x4, y4],
  ] = dots;
  let result = 0;

  if (
    (y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4) ||
    (y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4) ||
    (y1 - y4) / (x1 - x4) === (y2 - y3) / (x2 - x3)
  ) {
    result = 1;
  }

  return result;
}

console.log(solution([[1, 4], [9, 2], [3, 8], [11, 6]])); // 1
// console.log(solution([[3, 5], [4, 1], [2, 4], [5, 10]])); // 0