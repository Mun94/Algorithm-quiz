function solution(p, c) {
    p.sort();
    c.sort();
  
    for(let i in p)
        {
            if(p[i] !== c[i]) return p[i];
        }
}

const p=['mislav', 'stanko', 'mislav'];
const c=['stanko', 'ana', 'mislav'];

console.log(solution(p,c));