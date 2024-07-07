function solution(a, b, c, d) {
  let result = 0;
  const duplicate = new Set();
  duplicate.add(a);
  duplicate.add(b);
  duplicate.add(c);
  duplicate.add(d);

  if (duplicate.size === 1) {
    result = a * 1111;
  } else if (duplicate.size === 2) {
    const duplicateCnt = [a, b, c, d].filter(num => num === a).length;

    if (duplicateCnt === 1) {
      let p = 0;
      let q = 0;

      duplicate.forEach(num => {
        if (num === a) {
          q = a;
        } else {
          p = num;
        }
      });

      result = ((10 * p + q) ** 2);
    } else if (duplicateCnt === 2) {
      const [p, q] = Array.from(duplicate);

      result = (p + q) * Math.abs(p - q);
    } else if (duplicateCnt === 3) {
      let p = 0;
      let q = 0;

      duplicate.forEach(num => {
        if (num === a) {
          p = a;
        } else {
          q = num;
        }
      });

      result = ((10 * p + q) ** 2);
    }
  } else if (duplicate.size === 3) {
    let q = 0;
    let r = 0;

    duplicate.forEach(num => {
      if ([a, b, c, d].filter(t => t === num).length === 1) {
        if (!q) {
          q = num;
        } else {
          r = num;
        }
      }
    })

    result = q * r;
  } else if (duplicate.size === 4) {
    result = Math.min(a, b, c, d)
  }


  return result;
}