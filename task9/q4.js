const obj1 = { a: 1, b: { c: 2 }, e: { g: 12 } };
const obj2 = { b: { d: 3 }, e: { f: 12 } };

const arrObj = [obj1, obj2];
const result = {};
for (const item of arrObj) {
  for (const key in item) {
    if (typeof item[key] === "object" && item[key] !== null) {
      if (!result[key]) {
        result[key] = {};
      }
      Object.assign(result[key], item[key]);
    } else {
      result[key] = item[key];
    }
  }
}
console.log("result: ", result);
