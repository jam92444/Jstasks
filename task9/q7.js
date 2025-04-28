function findDiff(obj1, obj2) {
  const result = {};

  for (key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        result[key] = {
          from: obj1[key],
          to: obj2[key],
        };
      }
    } else {
      result[key] = {
        from: obj1[key],
        to: undefined,
      };
    }
  }
  for (key in obj2) {
    if (obj1.hasOwnProperty(key)) {
      if (obj2[key] !== obj1[key]) {
        result[key] = {
          from: obj2[key],
          to: obj1[key],
        };
      }
    } else {
      result[key] = {
        from: obj2[key],
        to: undefined,
      };
    }
  }
  return result;
}
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 4, d: 5 };
const res = findDiff(obj1, obj2);
console.log(res)