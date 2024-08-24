const solution = (cards1, cards2, goal) => {
  let cards1Idx = 0;
  let cards2Idx = 0;
  let result = 'Yes';

  for (let i = 0; i < goal.length; i++) {
    const alphabet = goal[i];

    if (cards1[cards1Idx] === alphabet) {
      cards1Idx++;
    } else if (cards2[cards2Idx] === alphabet) {
      cards2Idx++;
    } else {
      result = 'No';
      break;
    }
  }

  return result;
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"])) // 'yes'
console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"])) // 'yes'