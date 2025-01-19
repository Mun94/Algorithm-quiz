const test = '500613009';
const info = {};

for (let i = 0; i < test.length; i++) {
  const num = test[i];

  num in info ? info[num]++ : info[num] = 1;
}

let result = '';
for (let i = 9; i >= 0; i--) {
  if (info[i]) {
    result += String(i).repeat(info[i]);
  }
}

console.log(result); // 965310000