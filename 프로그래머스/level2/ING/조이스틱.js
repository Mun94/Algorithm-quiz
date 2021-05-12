function solution(name) {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const j = name.length;
  let x = 0;
  const split = name.split("");
  const result = [];

  for (let i = 0; i < split.length; i++) {
    if ([...new Set(split.slice(i, split.length))] === ["A"]) return;

    if (split[i] !== "A") {
      const index = alpha.indexOf(split[i]);
      const lastIndex = [...alpha].reverse().indexOf(split[i]) + 1;

      if (index < lastIndex) {
        result.push(index); // 위
      } else {
        result.push(lastIndex); // 아래
      }
      x++; // A없을 때 오른쪽 이동
    }

    if (split[i] === "A") {
      if (i > j - i) {
        result.push(j - i); // 오른쪽 이동
      } else {
        result.push(i);
      }
    }
  }

  return [result, x];
}

console.log(solution("BBBAAAB"));

/*
print(solution("BBBAAAB")) #9
print(solution("ABABAAAAABA")) #11
print(solution("CANAAAAANAN")) #49
print(solution("ABAAAAABAB")) #8
print(solution("ABABAAAAAB")) #10
print(solution("BABAAAAB")) #7
print(solution("AAA")) #0
print(solution("ABAAAAAAABA")) #6
print(solution("AAB")) #2
print(solution("AABAAAAAAABBB")) #12
print(solution("ZZZ")) #5
print(solution("BBBBAAAAAB")) #12
print(solution("BBBBAAAABA")) #13
*/
