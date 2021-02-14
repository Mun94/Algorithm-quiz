function solution(p, c) {
  p.sort();
  c.sort();

  for (let i in p) {
    if (p[i] !== c[i]) return p[i];
  }
}

const p = ["mislav", "stanko", "mislav"];
const c = ["stanko", "ana", "mislav"];

console.log(solution(p, c));

//////// 2번 방법

function solution2(p, c) {
  p.sort();
  c.sort();
  return p.filter((v, idx) => v !== c[idx])[0];
}

console.log(
  solution2(["mislav", "stanko", "mislav"], ["stanko", "ana", "mislav"])
);
