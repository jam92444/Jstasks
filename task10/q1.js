const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const result = Object.fromEntries(arr.map((item) => Object.values(item)));
console.log(result)