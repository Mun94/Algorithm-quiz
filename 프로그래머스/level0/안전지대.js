const solution = (board) => {
  // const rowCnt = board[0].length;
  // const totalZone = board.flat();
  // const result = totalZone.slice();
  //
  // const unSafeZone = [
  //   -(rowCnt + 1),
  //   -rowCnt,
  //   -(rowCnt - 1),
  //   -1,
  //   1,
  //   rowCnt - 1,
  //   rowCnt,
  //   rowCnt + 1
  // ];
  //
  // for (let i = 0; i < totalZone.length; i++) {
  //   const zone = totalZone[i];
  //
  //   if (zone === 1) {
  //     for (let j = 0; j < unSafeZone.length; j++) {
  //       if (result[i + unSafeZone[j]] === 0) {
  //         result[i + unSafeZone[j]] = 1;
  //       }
  //     }
  //   }
  // }
  //
  // return result;

  const useSafeZoneMark = 2;
  for (let i = 0; i < board.length; i++) {
    const row = board[i];

    for (let j = 0; j < row.length; j++) {
      const cell = row[j];

      if (cell === 1) {
        if (board[i - 1]?.[j - 1] === 0) {
          board[i - 1][j - 1] = useSafeZoneMark;
        }
        if (board[i - 1]?.[j] === 0) {
          board[i - 1][j] = useSafeZoneMark;
        }
        if (board[i - 1]?.[j + 1] === 0) {
          board[i - 1][j + 1] = useSafeZoneMark;
        }
        if (board[i]?.[j - 1] === 0) {
          board[i][j - 1] = useSafeZoneMark;
        }
        if (board[i]?.[j + 1] === 0) {
          board[i][j + 1] = useSafeZoneMark;
        }
        if (board[i + 1]?.[j - 1] === 0) {
          board[i + 1][j - 1] = useSafeZoneMark;
        }
        if (board[i + 1]?.[j] === 0) {
          board[i + 1][j] = useSafeZoneMark;
        }
        if (board[i + 1]?.[j + 1] === 0) {
          board[i + 1][j + 1] = useSafeZoneMark;
        }
      }
    }
  }

  return board.flat().filter(b => !b).length;
}

console.log(solution([[0,0,0], [0,0,1], [0,0,0]])) // 3
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]])) // 16
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]])) // 13
console.log(solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1 ]])) // 0