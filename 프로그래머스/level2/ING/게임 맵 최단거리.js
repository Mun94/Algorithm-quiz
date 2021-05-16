const solution = (maps) => {
  let x = 0;
  let y = 0;
  let result = 0;
  let checkArray = [];
  if (
    !maps[maps.length - 1 - result][maps.length - 2 - result] &&
    !maps[maps.length - 2 - result][maps.length - 1 - result]
  )
    return -1;

  sum(x, y);
  function sum(x, y) {
    if (x === maps[1].length - 1 && y === maps.length - 1) return;
    let right = maps[y][x + 1] || 0;
    let bottom = maps[y + 1][x] || 0;
    checkArray.push([x, y]);

    if (maps[y + 1][x] === 0 && maps[y][x - 1] === 0 && maps[y][x + 1]) {
      y--;
      result--;
      sum(x, y);
    } else if (bottom > right) {
      y++;
      result++;
      sum(x, y);
    }

    if (maps[y][x + 1] === 0 && maps[y - 1][x] === 0 && maps[y + 1][x]) {
      x--;
      result--;
      sum(x, y);
    } else if (right > bottom) {
      x++;
      result++;
      sum(x, y);
    }

    if (!right && !bottom) {
      y--;
      result++;
      sum(x, y);
    } else if (right === bottom) {
      if (checkArray[result - 1].join() === "" + x + y) {
        x++;
        result++;
        sum(x, y);
      } else {
        y++;
        result++;
        sum(x, y);
      }
    }
  }
  return result + 1;
};

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
