/*
문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
입출력 예
a	b	result
5	24	TUE

1-31
2-29
3-31
4-30
5-31
6-30
7-31
8-31
9-30
10-31
11-30
12-31
*/

// const getDayName = (month,day) => {
//     const month_31 = [5,7,8,10,12];
//     const month_30 = [4,6,9,11];
//     const day_all = [31,29,31,30,31,30,31,31,30,31,30,31];
//     let day_plus = null;

//     const sum = (month, day_plus, day_all) => {
//         for(let i=0; i < month-1; i++){
//              day_plus += day_all[i]
//         }
//         return day_plus += day;
//     }

//     if(month === 1 && day <= 31){
//         return day_plus = day;
//     }
//     else if(month === 2 && day <= 29 || month === 3 && day <= 31){
//         return sum(month, day_plus, day_all);
//     }
//     else if(month_31.indexOf(month-1) > -1 && day <= 30 && month !== 13){
//         return sum(month, day_plus, day_all);
//     }
//     else if(month_30.indexOf(month-1) > -1 && day <= 31 ){
//         return sum(month, day_plus, day_all);
//     }else{
//         null;
//     }

//     return day_plus;
// }

// const ResultFuc = (a,b) => {
//     const DayOfTheWeek = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
//     let result = null;
//     let ResultDay = getDayName(month=a, day=b);

//     if(ResultDay !== null){
//         for(let i = 0; i < 7; i++){
//         if(ResultDay % 7 === i){
//            return result = DayOfTheWeek[i];
//             }
//         }
//     }else{
//         null;
//     }

//     return result;
// }
// console.log(ResultFuc(5,24)) <--------테스트 7,8 실패


function solution(a, b) {
    var answer = '';
    const date = new Date(`2016,${a},${b}`);
    let day= (date+"").split(' ')[0];
     answer = day.toUpperCase();
    return answer;
}
console.log(solution(5,24)) 

///////// 2번 방법

function solution2(a, b) {
    return ['SUN','MON','TUE','WED','THU','FRI','SAT'][new Date(`2016-${a}-${b}`).getDay()];
}

console.log(solution2(5,24)) 