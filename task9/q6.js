function removeFalsy(obj) {
  const final = Object.fromEntries(Object.entries(obj).filter(([key])=> obj[key]));
  return final;
}
const input = { a: 1, b: null, c: undefined, d: 0, e: "Hello" };
const res = removeFalsy(input);
console.log(res);
