let list = [
  {
    id: 1,
    value: 12,
    data: [
      {
        id: 1,
        value: 3,
        data: [1, 2, 3, 4, 5, 6],
      },
      {
        id: 2,
        value: 5,
        data: [3, 2, 5, 2, 10, 1],
      },
      {
        id: 3,
        value: 9,
        data: [7, 5, 12, 65, 13, 1],
      },
    ],
  },
  {
    id: 2,
    value: 15,
    data: [
      {
        id: 1,
        value: 12,
        data: [32, 23, 2, 1, 3, 4],
      },
      {
        id: 2,
        value: 15,
        data: [5, 2, 21, 12, 25, 12],
      },
      {
        id: 3,
        value: 6,
        data: [6, 6, 4, 4, 3, 3],
      },
    ],
  },
  {
    id: 3,
    value: 14,
    data: [
      {
        id: 1,
        value: 18,
        data: [13, 7, 9, 0, 13, 24],
      },
      {
        id: 2,
        value: 7,
        data: [32, 12, 23, 21, 90, 10],
      },
      {
        id: 3,
        value: 9,
        data: [11, 12, 13, 14, 15, 16],
      },
    ],
  },
  {
    id: 4,
    value: 17,
    data: [
      {
        id: 1,
        value: 27,
        data: [21, 22, 23, 24, 25, 26],
      },
      {
        id: 2,
        value: 9,
        data: [11, 22, 33, 34, 45, 16],
      },
      {
        id: 3,
        value: 3,
        data: [51, 42, 33, 24, 15, 76],
      },
    ],
  },
];



const findData = (givenValue,findID) =>{
   const result =  list.find( item =>  item.id == givenValue).data.find(item => item.id === findID).data;
   return result
}

console.log(findData(3,2))