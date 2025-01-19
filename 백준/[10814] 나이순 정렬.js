let test = `3
21 Junkyu
21 Dohyun
20 Sunyoung`;

const input = test.split("\n");

const data = [];
for (let i = 1; i < input.length; i++) {
  data.push(input[i]);
}

data.sort((a, b) => Number(a.split(" ")[0]) - Number(b.split(" ")[0]));

console.log(data.join('\n'));
/*
 20 Sunyoung
 21 Junkyu
 21 Dohyun
*/