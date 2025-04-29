const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];
const allAdults = users.every((user) => user.age > 18);
const hasSenior = users.some((user) => user.age > 40);
console.log(allAdults)
console.log(hasSenior)