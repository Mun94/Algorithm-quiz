/*
문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.
입출력 예
s	return
abcde	c
qwer	we
*/

function solution(s) {
  var answer = "";
  const result = Math.floor(s.length / 2);

  answer = s.length % 2 === 1 ? s[result] : s[result - 1] + s[result];

  return answer;
}

const s = "abcde";

console.log(solution(s));

////////////// 2번 방법

function solution(s) {
  if (s.length % 2 === 0) {
    let va = s.length / 2;
    return s.slice(va - 1, va + 1);
  } else {
    return s[Math.floor(s.length / 2)];
  }
}

console.log(solution("qwer"));
