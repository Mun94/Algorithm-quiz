const multiply = (a, b) => {
    //
    return a * b;
};

const square = (n) => {
    return multiply(n, n);
};

const printSquare = (n) => {
    const squared = square(n);
    let obj = 4
    setTimeout(() => console.log('setTimeout', obj), 0);
    obj = 3;
    console.log(squared);
};

printSquare(4);
console.log('main all done');