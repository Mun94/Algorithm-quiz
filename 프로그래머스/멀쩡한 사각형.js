function solution(w,h){
    const he = Math.max(w,h);
    const we = Math.min(w,h);
    let array = [];

    for(let i = 1; i <= we; i++){
        if(he % i===0 && we % i===0){
            array.push(i);
        }
    }
    
    return we === he ? we * he - we : we * he - (we+he-array.pop())
}

console.log(solution(3,3))