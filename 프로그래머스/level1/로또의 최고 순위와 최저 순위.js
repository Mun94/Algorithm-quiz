function fir_solution(lottos, win_nums) {
    const count = 6;
    const zeroCnt = lottos.filter(lot => !lot).length;

    let min = 0;
    for(let i = 0; i < win_nums.length; i++) {
        if(lottos.some(lot => lot === win_nums[i])) min++;
    };

   const lowestRank = min < 2 ? count : count - (min - 1);
   const topRank = Math.abs(lowestRank - zeroCnt) || 1
    return [topRank, lowestRank]
}

console.log(fir_solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));

function sec_solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    const zeroCnt = lottos.filter(lot => !lot).length;
    const minCnt = lottos.filter(v => win_nums.includes(v)).length;

    return [rank[minCnt+zeroCnt], rank[minCnt]]
}

console.log(sec_solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));