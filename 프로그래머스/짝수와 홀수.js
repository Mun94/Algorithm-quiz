/*
문제 설명
정수 num이 짝수일 경우 Even을 반환하고 홀수인 경우 Odd를 반환하는 함수, solution을 완성해주세요.

제한 조건
num은 int 범위의 정수입니다.
0은 짝수입니다.
입출력 예
num	return
3	Odd
4	Even
*/

//음수(-2 짝수, -1 홀수)도 인식 됨, 음수를 걸러내는 필터링 필요

function solution(num){
    return num >= 0 ? (num%2===0 ? "Even" : "Odd") : null
}

console.log(solution(-1));