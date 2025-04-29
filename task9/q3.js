let obj = { a: 1, b: 2, c: 3 };

const resultObj = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [value, key])
);
console.log(resultObj);
