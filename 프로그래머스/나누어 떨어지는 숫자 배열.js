function solution(arr, divisor) {
    var answer = [];

    answer =  arr.filter(a => a % divisor === 0);
    
    if(answer.length > 0){
        return answer.sort((a,b) => a-b)
    }
    else if(arr.some(a => a < divisor)){
        answer = [-1]
    }else{
        null;
    }
    return answer;
}

const arr = [3,2,65,2,1,3,4,2,35,2];
const divisor = 1;

console.log(solution(arr, divisor));