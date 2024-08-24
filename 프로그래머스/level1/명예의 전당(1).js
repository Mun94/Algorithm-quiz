const solution = (k, scoreList) => {
  const list = [];
  const stack = [];

  for (let i = 0; i < scoreList.length; i++) {
    list.push(scoreList[i]);

    const minIdx = list.length < k ? list.length - 1 : k - 1;
    const minScore = list.sort((a, b) => b - a)[minIdx];

    stack.push(minScore);
  }

  return stack;
}


console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]