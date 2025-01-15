const input = ['10', '10'];

const a = Number(input[0] === '0' ? '24' : input[0]);
const b = Number(input[1]);

const totalMin = (a * 60 + b - 45) % 1440; // 하루 1440분
const hour = parseInt(totalMin / 60);

console.log(hour === 24 ? 0 : hour);
console.log(totalMin % 60);