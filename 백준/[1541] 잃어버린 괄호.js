// 최솟값을 구하는 문제이므로 뺄셈(-) 연산자를 기준으로 최대한 많은 수를 묶는다.
// 55-50+40 -> ['55', '50+40'] -> 55-(50+40) = -35
// -55-50+40 -> ['', '55', '50+40'] -> -55-(50+40) = -145
// 90+30-20+50-30+60-70+30+20 -> ['90+30', '20+50', '30+60', '70+30+20'] -> (90+30)-(20+50)-(30+60)-(70+30+20) = -160
const test = '-55-50+40';

const input = test.toString();
const valList = input.split('-');

let result = 0;
for (let i = 0; i < valList.length; i++) {
  const val = valList[i];

  const sum = val.split('+').reduce((acc, cur) => acc + Number(cur), 0);

  if (i > 0) {
    result -= sum;
  } else {
    result += sum;
  }
}
console.log(result);