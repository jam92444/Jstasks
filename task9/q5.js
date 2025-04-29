const user = { name: "John", age: 30, email: "john@example.com" };
function pickKey(obj, ...keys) {
  const result = Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key))
  );
  return result;
}

const res = pickKey(user, "name","saub");
console.log(res);
