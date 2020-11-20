/* 문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.

제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.

입출력 예
s	answer
pPoooyY	true
Pyy	false

입출력 예 설명
입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.*/

function answer(s) {
    let ppp = 0;
    let yyy = 0;
  for(let i=0; i < s.length; i++)
    {
        if(s[i] === 'p' || s[i] === 'P')
        {
            ppp ++;
        }
        if(s[i]==='y' || s[i] === 'Y')
        {
            yyy++; 
        }
    }
    return ppp !== yyy ? false : ppp ===0 && yyy===0 ? false : true; 
}

console.log(answer('pPoooyY'));
console.log(answer('Pyy'));
console.log(answer(''));

////////// 2번 방법

function solution(s){
    const fun = (x) => {
        return s.toUpperCase().split('').filter(a => a === x).length
    }
    return (fun('Y') === fun('P')) && s.length > 0 ? true : false
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));
console.log(solution(''));

////////// 3번 방법

function solution2(s){
    console.log(s.toUpperCase().split('Y'), s.toUpperCase().split('P'))
    return s.toUpperCase().split('Y').length === s.toUpperCase().split('P').length
}

console.log('s',solution2('YypypaYSypbbsppyp'));

////////// 4번 방법

function solution3(s){
    return s.match(/p/ig).length === s.match(/y/ig).length
}

console.log(solution3('pPoooYy'));
