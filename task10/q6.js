const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

const result = users.filter((item) => item.age > 30);

console.log(result)