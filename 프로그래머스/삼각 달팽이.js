/*
n	result
4	[1,2,9,3,10,8,4,5,6,7]
5	[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
6	[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
*/

function solution(n) {
  let result = Array.from({ length: n }, () => []);
  let count = 0;
  let x = -1;
  let y = 0;
  while (n > 0) {
    for (let i = 0; i < n; i++) result[++x][y] = ++count;
    for (let i = 0; i < n - 1; i++) result[x][++y] = ++count;
    for (let i = 0; i < n - 2; i++) result[--x][--y] = ++count;
    n -= 3;
  }
  return result.reduce((acc, val) => {
    return acc.concat(val);
  }, []);
}

console.log(solution(6));
