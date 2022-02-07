const main = () => {
    const fir = {a: 1, b: 2, c: 3};
    const sec = [4, 5, 6];
    const thr = 7;
    let result;
    for(let ix = 0; ix < 1000; ix++) {
        result = fir.c + sec[2] + thr;
    }
}

console.time('performance');
main();
console.timeEnd('performance');

const main2 = () => {
    let result2;
    for(let ix = 0; ix < 1000; ix++) {
        const fir = {a: 1, b: 2, c: 3};
        const sec = [4, 5, 6];
        const thr = 7;
        result2 = fir.c + sec[2] + thr;
    }
}

console.time('performance2');
main2();
console.timeEnd('performance2');