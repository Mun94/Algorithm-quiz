const solution = (array, commands) => {
  return commands.map(([i, j, k]) => {
    const sliced = array.slice(i-1, j);
    const sorted = sliced.sort((a, b) => a - b);

    return sorted[k-1];
  });
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])); // [5, 6, 3]