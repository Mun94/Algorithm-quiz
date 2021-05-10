function solution(citations) {
  const sort = citations.sort((a, b) => b - a);

  let NO = 1; // 첫 번째 논문
  let i = 0;

  while (sort[i] >= NO) {
    i++;
    NO++;
  }

  return i;
}

console.log(solution([0, 1, 2]));
