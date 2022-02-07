const solution = (s) => {
    const num = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ]

    for(let ix = 0; ix < num.length; ix++) {
        if(s.includes(num[ix])) {
            s = s.replace(num[ix], ix);
            ix = 0;
        }
    }

    return Number(s);
}

console.log(solution("one4seveneightone"))