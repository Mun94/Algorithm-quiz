// 문제 풀이: 10분

const solution = (babbling) => {
  const canSpeakWord = ['aya', 'ye', 'woo', 'ma'];

  let result = 0;
  for (let i = 0; i < babbling.length; i++) {
    const babblingItem = babbling[i];
    let useWordLength = 0;

    for (let j = 0; j < canSpeakWord.length; j++) {
      const canSpeakWordItem = canSpeakWord[j];

      if (babblingItem.includes(canSpeakWordItem)) {
        useWordLength += canSpeakWordItem.length;
      }

      if (useWordLength === babblingItem.length) {
        ++result
        break;
      }
    }
  }

  return result;
}

console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']))