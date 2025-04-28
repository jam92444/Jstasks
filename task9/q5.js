const user = { name: "John", age: 30, email: "john@example.com" };
function pickKey(obj, ...keys) {
  const result = {};
  for (const key in obj) {
    for (const items of keys) {
      if (key == items) {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

const res = pickKey(user, "name","email");
console.log(res);
