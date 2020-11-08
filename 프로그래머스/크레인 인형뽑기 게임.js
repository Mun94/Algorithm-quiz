const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];

function solution(board, moves) {
    var answer = 0;
    let array =[];
    let be = [];
    let af = [];
    let array2 = [];
    
for(let i =0; i < board.length; i++){
    for(let j=0; j < board.length; j++){
        array.push(board[j][i]);   
    }
    be.push(array.splice(0,board.length));
}

for(let i = 0; i < be.length; i++){
    af.push(be[i].filter(v => v !== 0))
}

for(let j =0; j<moves.length; j++){
    for(let i =1; i<=af.length; i++){
        if(i===moves[j]){
            array2.push(af[moves[j]-1].shift())}};
    }

for(let i =0; i<array2.length; i++){
    if(array2[i]===array2[i+1]){
        aa = array2.splice(i,2);
        answer += parseInt(aa.length);
        i=0;
    }
}    
console.log(array2)
    return answer
}

console.log(solution(board, moves));
