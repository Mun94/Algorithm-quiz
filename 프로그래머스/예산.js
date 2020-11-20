function solution(d, budget){
    let result = 0;

    return Math.max.apply(null,  d.sort((a,b) => a-b).map((m,index) => {
            result += m
                if(result <= budget){
                    return index+1
                }else{
                    return 0
                }
    }))
}

console.log(solution([1,10,9,3,2,2,1,4,2,3], 10));