const solution = (numbers) => {
    let result = 0;
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) {
            result += i;
        };
    };

    return result;
};

console.time('performance');
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.timeEnd('performance');


function solution2(numbers) { // 다른 풀이
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
};

console.time('다른 풀이 performance');
console.log(solution2([1, 2, 3, 4, 6, 7, 8, 0]));
console.timeEnd('다른 풀이 performance');