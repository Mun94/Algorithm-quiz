function n_m_array(v, array){
    if(0<v && v<=1000000){
    for(let i = 1; i <= v; i++){
        if(v%i === 0){
            array.push(i);
        }
    }}else{
        return null;
    }
}

function solution(n,m){
    let n_array = [];
    let m_array = [];

    n_m_array(n,n_array)
    n_m_array(m,m_array)
  
    for(let i =0; i< n_array.sort((a,b) => b-a).length; i++){
       if(m_array.some(v => v === n_array[i])){
                n_array=n_array[i]
                break;    
       }
    }
    
    m_array = (Math.max.apply(null, new Array(n,m))/n_array) * Math.min.apply(null,new Array(n,m));

    return [n_array, m_array];
}

console.log(solution(60,48)) 

/// 2번 방법

function solution2(n,m){
    let max = 0;
    for(let i =1; i<=n; i++){
        if(n%i===0 && m%i===0){
            max=i
        }
    }

    let min = (Math.max.apply(null, new Array(n,m))/max) * Math.min.apply(null,new Array(n,m));

    return [max,min]
}

console.log(solution2(10,60))