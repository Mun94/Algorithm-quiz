const selectionSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }

    console.log(i, minIdx, arr);
  }

  return arr;
}

console.log(selectionSort([3, 1, 6, 2, 9, 0]));