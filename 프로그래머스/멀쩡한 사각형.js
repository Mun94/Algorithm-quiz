function solution(w, h) {
  const he = Math.max(w, h);
  const we = Math.min(w, h);
  let array = [];

  for (let i = 1; i <= we; i++) {
    if (he % i === 0 && we % i === 0) {
      array.push(i);
    }
  }

  return we === he ? we * he - we : we * he - (we + he - array.pop());
}

console.log(solution(3, 3));

////// 2번 방법
function solution(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let num = 0;

  for (let i = min; i >= 1; i--) {
    if (max % i === 0 && min % i === 0) {
      num = i;
      break;
    }
  }
  return a === b ? a * b - a : a * b - (a + b - num);
}

console.log(solution(8, 12));
