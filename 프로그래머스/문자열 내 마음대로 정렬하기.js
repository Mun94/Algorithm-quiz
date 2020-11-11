/*
문제 설명
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
입출력 예
strings	n	return
[sun, bed, car]	1	[car, bed, sun]
[abce, abcd, cdx]	2	[abcd, abce, cdx]
입출력 예 설명
입출력 예 1
sun, bed, car의 1번째 인덱스 값은 각각 u, e, a 입니다. 이를 기준으로 strings를 정렬하면 [car, bed, sun] 입니다.

입출력 예 2
abce와 abcd, cdx의 2번째 인덱스 값은 c, c, x입니다. 따라서 정렬 후에는 cdx가 가장 뒤에 위치합니다. abce와 abcd는 사전순으로 정렬하면 abcd가 우선하므로, 답은 [abcd, abce, cdx] 입니다. 
*/
const strings = ['abcf', 'abcd', 'cdx','aacd','aaad'];
const n = 2;

function solution(strings, n) {
    var answer = [];
    let answer1 = []; 
    let result = [];

    if(strings.some(s => s.length > n)){
    for(let i = 0; i < strings.length; i++){
        let input = {id:i, str:strings[i][n], origin:strings[i]}
        if(strings.filter(s => s[n] === strings[i][n]).length === 1){
            answer.push(input)
        }else{
            answer1.push(input)
        }
    }
        answer1.sort((a,b) => {if(a.origin < b.origin){
        return -1;
    }})

    const array2 = new Array(...answer, ...answer1).sort((a,b) => {if(a.str < b.str) return -1});

    for(let i = 0; i < array2.length; i++){
        result.push(strings[array2[i].id]);
    }}else{
        result = null;
    }

    return result;
}

console.log(solution(strings, n));

// -------------- 2번 방법

function solution2(strings, n) {
    strings.sort(function(a,b){
        if(a[n] > b[n]) return 1;
        if(b[n] > a[n]) return -1;

        if(a > b) return 1;
        if(b > a) return -1;

        return 0;
    });
    return strings;
}

console.log(solution2(strings, n));

// -------------- 3번 방법

function solution3(strings, n) {
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        const chr2 = b.charAt(n);

        if (chr1 == chr2) {
            return (a > b) - (a < b);
        } else {
            return (chr1 > chr2) - (chr1 < chr2);
        }
    })
}

console.log(solution3(strings, n));