const item = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`
const input = item.toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);

let count = 0;

for (let i = n; i > 0; i--) {
  if (!k) {
    break;
  }

  const m = Number(input[i]);

  count += parseInt(k / m);
  k %= m;
}

console.log(count);