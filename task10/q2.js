const people = [
  { name: "John", age: 20 },
  { name: "Jane", age: 20 },
  { name: "Bob", age: 25 },
];

let result = _.groupBy(people, ({ age }) => age);

console.log(result);
