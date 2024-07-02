const solution = (lines) => {
  const [[x1Start, x1End], [x2Start, x2End], [x3Start, x3End]] = lines;

  const duplicate = new Set();

  const calDuplicateLine = (line, compareLine) => {
    const [startLine, endLine] = line;
    const [
      [startCompareLine1, endCompareLine1],
      [startCompareLine2, endCompareLine2]
    ] = compareLine;
    let prev;

    for (let i = startLine; i <= endLine; i++) {
      if (i >= startCompareLine1 && i <= endCompareLine1 || i >= startCompareLine2 && i <= endCompareLine2) {
        if (prev === i - 1 && (startLine !== prev || endLine !== i)) {
          duplicate.add(i);
        }
        prev = i;
      }
    }
  }

  calDuplicateLine(
    [x1Start, x1End],
    [[x2Start, x2End], [x3Start, x3End]]
  );
  calDuplicateLine(
    [x2Start, x2End],
    [[x1Start, x1End], [x3Start, x3End]]
  );

  return duplicate.size;
}

console.log(solution([[0, 2], [-3, -1], [-2, 1]]))
console.log(solution([[0, 1], [2, 5], [3, 9]])); // 0
console.log(solution([[-1, 1], [1, 3], [3, 9]])); // 0
console.log(solution([[0, 5], [3, 9], [1, 10]])); // 0
console.log(solution([[1,2],[2,3],[3,4]])); // 0