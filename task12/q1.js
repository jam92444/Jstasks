let list1 = [
  {
    data: [
      { keyName: "id", valueName: 1 },
      { keyName: "name", valueName: "ABC" },
      { keyName: "department", valueName: "CSE" },
    ],
  },
  {
    data: [
      { keyName: "id", valueName: 2 },
      { keyName: "name", valueName: "DEF" },
      { keyName: "department", valueName: "ECE" },
    ],
  },
  {
    data: [
      { keyName: "id", valueName: 3 },
      { keyName: "name", valueName: "GHI" },
      { keyName: "department", valueName: "MECH" },
    ],
  },
];

const combineKeyValuePair = (list1) => {
  const result = [];
  list1.map(({ data }) => {
    const sampleObj = {};
    data.forEach(({ keyName, valueName }) => {
      sampleObj[keyName] = valueName;
    });

    result.push(sampleObj);
  });
  return result;
};

console.log(combineKeyValuePair(list1));
