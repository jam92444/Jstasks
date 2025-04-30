const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "X" },
];

const newArr = () => {
  const seenNames = new Set();
  const result = [];

  arr.forEach((item) => {
    if (!seenNames.has(item.name)) { //seenName no include add it else do nothing 
      seenNames.add(item.name);
      result.push(item);
    }
  });

  console.log(result);
};

newArr();
