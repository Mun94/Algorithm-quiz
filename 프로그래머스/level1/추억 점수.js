const solution = (nameList, yearning, photoList) => {
  return photoList.reduce((acc, cur) => {
    let totalYearning = 0;
    const photo = new Set(cur);

    for (let i = 0; i < nameList.length; i++) {
      const name = nameList[i];

      if (photo.has(name)) {
        totalYearning += yearning[i];
      }
    }

    acc.push(totalYearning);

    return acc;
  }, []);
}

console.log(solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
));