const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];
const data = users.sort((a, b) => a.age - b.age);
console.log(data);
