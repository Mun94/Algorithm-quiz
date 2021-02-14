// /*
// 소수 찾기
// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 입출력 예
// n	result
// 10	4
// 5	3
// 입출력 예 설명
// 입출력 예 #1
// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

// 입출력 예 #2
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
// */

// // 1방법 테스트 10,11,12 실패 및 효율성 실패

// function solution(n) {
//     var answer = 0;
//     let array = [];

//     if(2 <= n && n <= 1000000){
//     for(let i = 1; i <= n; i++){
//        for(let j = 1; j <= n; j++){
//            if(i%j===0){
//                array.push(i)
//            }
//        }
//        if(array.filter(a => a === i).length === 2){
//            answer++;
//            array.splice(i,2)
//        }
//     }}else{
//         null
//     }

//     return answer;
// }

// // 2번 방법 테스트 10,11,12 실패 및 효율성 실패

// function solution2(n){
//     let answer = 0;
//     let array = [];
//     let result = [];
//     let value = [2,3,5,7];

//     if(2 <= n && n <= 1000000){
//         for(let i = 2; i <= n; i++) array.push(i);

//         for(let i = 0; i <= n; i++){
//             for(let j = 0; j < value.length; j++){
//                 if(array[i] !== value[j] && array[i] % value[j] === 0){
//                     array[i] = 0
//                 };
//             }
//         };

//         array = array.filter(number => Math.ceil(Math.sqrt(number)) !== Math.sqrt(number));

//         for(let i = 0; i <= array.length; i++){
//             for(let j = 0; j <= array.length; j++){
//                 if(array[i]%array[j]===0){
//                         result.push(array[i]);
//                     }
//                 }
//                 if(result.filter(a => a === array[i]).length === 1){
//                     answer++;
//                 }
//             }
//         }

//     return answer;
// }

// const n = 100;

// console.log(solution2(n));

///////3번 방법 테스트 10,11,12 실패 및 효율성 실패

// function solution2(n){
//     let result = 0;
//     let count = 0;

//     for(let i = 2; i <= n; i++){
//         count = 0;
//         for(let j = 1; j <= i; j++){
//             if(i%j === 0) count++;
//         }
//         if(count === 2) result++
//     }

//     return result
// }

// console.log(solution2(5))

function solution(n) {
  let array = [];
  for (let i = 1; i <= n; i++) array.push(i);

  for (let i = 1; i <= Math.sqrt(n); i++) {
    let num = array[i];
    if (num) {
      for (let j = num * num; j <= n; j += num) {
        array[j - 1] = 0;
      }
    }
  }

  return array.filter((a) => a).length - 1;
}

console.log(solution(10));

//////////// 2번 방법

const n = 10;

const solution2 = (n) => {
  let array = [...Array(n)].map((v, i) => i + 1);

  for (let i = 1; i <= Math.sqrt(n); i++) {
    let num = array[i];
    if (num) {
      for (let i = num * 2; i <= n; i += num) {
        array[i - 1] = 0;
      }
    }
  }
  return array.filter((a) => a).length - 1;
};

console.log(solution2(n));
