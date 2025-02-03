let test = `37 42 59
6
0 143821
1 14382
2 1438
3 143
4 14
5 1`;

const input = test.toString().split('\n');

const [length, width, height] = input.shift().split(' ').map(Number);
const cubes = Array(20).fill(0);
const n = Number(input.shift());

for (let i = 0; i < n; i++) {
  const [size, cnt] =  input[i].split(' ');
  cubes[size] = cnt;
}

let res = 0;
let used = 0;
for (let i = n - 1; i >= 0; i--) {
  // 이전에 사용한 큐브가 현재 크기에서 차지하는 공간 계산
  used *= 8;  // 한 단계 작은 큐브 8개가 현재 크기 큐브 1개를 채움

  // 현재 크기의 큐브 한 변 길이
  const cubeSize = 2 ** i;

  // 현재 크기 큐브가 들어갈 수 있는 총 개수에서 이미 사용된 공간 빼기
  const maxCubes = Math.floor(length / cubeSize) *
    Math.floor(width / cubeSize) *
    Math.floor(height / cubeSize);
  const needCubes = maxCubes - used;

  if (needCubes > -1) {
    // 필요한 큐브 개수와 가진 큐브 개수 중 작은 값 사용
    const useCubes = Math.min(needCubes, cubes[i]);
    res += useCubes;
    used += useCubes;
  }
}

if (used === length * width * height) {
  console.log(res);
} else {
  console.log(-1);
}

// 틀림
// 큐브를 박스의 모서리에 맞춰 넣어야 하는데, 현재 코드는 부피만 계산함.
// ex.
// 박스 = 5 * 3 * 4 / 큐브 = 2 * 2 * 2 일 때
// 실제로 가로 방향으로 2개 세로 방향으로 1개 높이 방향으로 2개 총 2 * 1 * 2 = 4개를 넣을 수 있는데
// 부피로 계산하는 경우 7개를 넣을 수 있다고 계산함.
// let test = `4 4 8
// 3
// 0 32
// 1 5
// 2 1`;
// const input = test.split('\n');
//
// let boxSize = input.shift().split(' ').reduce((acc, cur) => {
//   acc *= cur;
//
//   return acc;
// }, 1);
// const cubeCnt = Number(input.shift());
// const cubeSize = input.map((v) => v.split(' ').map((v) => Number(v)));
//
// let result = 0;
// for (let i = cubeCnt - 1; i >= 0; i--) {
//   const [size, n] = cubeSize[i];
//   const cube = (2 ** size) ** 3;
//
//   for (let j = 1; j <= n; j++) {
//     if (boxSize >= cube) {
//       boxSize -= cube;
//       result += 1;
//     } else {
//       break;
//     }
//   }
// }
//
// if (boxSize) {
//   result = -1;
// }
// console.log(result);