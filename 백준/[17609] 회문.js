// 유사회문: 한 문자를 삭제하여 회문으로 만들 수 있는 문자열
// 문자열의 맨 앞과 맨 뒤에서 한 문자씩 확인하면서 회문이 성립하는지 확인한다.
// 만약 회문이 성립하지 않는 위치를 찾는다면 다음 과정으로 유사회문이 가능한지 여부를 확인한다.
// 1. 왼쪽 문자를 제거했을 때 회문이 되는지 확인
// 2. 오른쪽 문자를 제거했을 때 회문이 되는지 확인
let test = `12
abbab
abbbbba
baaba
abcbdcba
abcbda
abba
summuus
xabba
xabbay
comcom
comwwmoc
comwwtmoc`;
const input = test.split('\n');
const n = parseInt(input.shift());

const isPalindrome = (str, start, end) => {
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }

  return true;
}

const checkPalindrome = (str) => {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      // 왼쪽 문자를 제거하거나 오른쪽 문자를 제거했을 때
      // 하나라도 회문이 되면 유사회문
      if (isPalindrome(str, i + 1, j) || isPalindrome(str, i, j - 1)) {
        return 1;
      }
      return 2;
    }
  }
  return 0;
}

for (let i = 0; i < n; i++) {
  const str = input[i];
  const result = checkPalindrome(str);
  console.log(result);
}

// 틀림..왜 틀렸는지 도무지 모르겠음..
let test2 = `12
abbab
abbbbba
baaba
abcbdcba
abcbda
abba
summuus
xabba
xabbay
comcom
comwwmoc
comwwtmoc`;

const input2 = test2.split('\n');
const n2 = parseInt(input2.shift());

const checkPalindrome2 = (str) => {
  let left = 0;
  let right = str.length - 1;
  let result = 0;

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else if (str[left + 1] === str[right]) {
      left++;
      result = 1;
    } else if (str[right - 1] === str[left]) {
      right--;
      result = 1;
    } else {
      left = right;
      result = 2;
    }
  }

  return result;
}

for (let i = 0; i < n2; i++) {
  const str = input[i];

  const result = checkPalindrome2(str);

  console.log(result);
}