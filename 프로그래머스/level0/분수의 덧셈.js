const solution = (numer1, denom1, numer2, denom2) => {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;
  const largerVal = numer > denom ? numer : denom;
  const smallerVal = numer < denom ? numer : denom;

  let divisor;
  for (let i = smallerVal; i >= 2; i--) {
    if (largerVal % i === 0 && smallerVal % i === 0) {
      divisor = i;
      break;
    }
  }

  if (divisor) {
    numer /= divisor;
    denom /= divisor;
  }

  return [numer, denom];
}

console.log(solution(1,2,3,4)); // [5, 4]
console.log(solution(9,2,1,3)); // [29, 6]