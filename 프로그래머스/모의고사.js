function solution(answer){
    const one=[1,2,3,4,5];
    const two=[2,1,2,3,2];
    const three=[3,3,1,1,2];

    let one_ = 0; 
    let two_ = 0;
    let three_ = 0;

    let array = [];

    for(let i =0; i<answer.length; i++){
        if(one[i] === answer[i]){
            one_++;
        }
        if(two[i] === answer[i]){
            two_++;
        }
        if(three[i] === answer[i]){
            three_++;
        }
    }

    const count = new Array(one_,two_,three_);

    for(let i=0; i<count.length; i++){
        if(count.filter(co => co === count[i]).length === count.length){
            array.push(i+1);
        } 
        else if(count[i]===Math.max.apply(null, count)){
            array.push(i+1)
        }
    }

    return array
}

const answer = [1,3,2,4,2,1,3,2,4,2];

console.log(solution(answer))