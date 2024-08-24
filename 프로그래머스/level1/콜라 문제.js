const solution = (
  standard,
  returnBottle,
  totalEmptyBottle,
  totalReturnBottle = 0
) => {
  if (totalEmptyBottle < standard) {
    return totalReturnBottle;
  }

  const remainderBottle = totalEmptyBottle % standard;
  const returnCnt = (((totalEmptyBottle - remainderBottle) / standard) * returnBottle);

  totalReturnBottle += returnCnt;

  return solution(standard, returnBottle, returnCnt + remainderBottle, totalReturnBottle);
}

console.log(solution(2, 1, 20)) // 19
console.log(solution(3, 1, 20)) // 9