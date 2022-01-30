const solution = (new_id) => {
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/]/g, '');

    while (new_id.includes('..')) {
        new_id = new_id.replace('..', '.');
    };

    new_id = new_id[0] === '.' ? new_id.substr(1) : new_id;

    if (!new_id) {
        new_id += 'a';
    };

    if (new_id.length >= 16) {
        new_id = new_id.substr(0, 15);
    };
    new_id = new_id[new_id.length - 1] === '.' ? new_id.substr(0, new_id.length - 1) : new_id;

    if (new_id.length <= 2) {
        while (new_id.length <= 2) {
            new_id += new_id[new_id.length - 1]
        };
    };

    return new_id;
};

console.time('performance');
console.log(solution("abcdefghijklmn.p"));
console.timeEnd('performance');
