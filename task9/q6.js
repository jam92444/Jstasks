function removeFalsy(obj) {
  const final = obj
  for (const keys in obj) {
    if (
      obj[keys] !== false &&
      obj[keys] !== undefined &&
      obj[keys] !== 0 &&
      obj[keys] !== null &&
      obj[keys] !== NaN
    ) {
      final[keys] = obj[keys]
    }else{
        delete obj[keys]
    }
  }
  return final;
}
const input = { a: 1, b: null, c: undefined, d: 0, e: 'Hello'};
const res = removeFalsy(input);
console.log(res)
