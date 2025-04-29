function findDiff(obj1, obj2) {
  let result = Object.keys(obj1)
    .filter((key) => obj2.hasOwnProperty(key) && obj1[key] !== obj2[key])
    .map((key) => ({
      [key]: {
        from: obj1[key],
        to: obj2[key],
      },
    }));
  result = result.concat(
    Object.keys(obj2)
      .filter((key) => !obj1.hasOwnProperty(key))
      .map((key) => ({
        [key]: {
          from: undefined,
          to: obj2[key],
        },
      }))
  );
  result = result.concat(
    Object.keys(obj1)
      .filter((key) => !obj2.hasOwnProperty(key))
      .map((key) => ({
        [key]: {
          from: obj1[key],
          to: undefined,
        },
      }))
  );

  return result;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 4, d: 5 };
const res = findDiff(obj1, obj2);
console.log(res);

// for (key in obj1) {
//   if (obj2.hasOwnProperty(key)) {
//     if (obj1[key] !== obj2[key]) {
//       result[key] = {
//         from: obj1[key],
//         to: obj2[key],
//       };
//     }
//   } else {
//     result[key] = {
//       from: obj1[key],
//       to: undefined,
//     };
//   }
// }
// for (key in obj2) {
//   if (obj1.hasOwnProperty(key)) {
//     if (obj2[key] !== obj1[key]) {
//       result[key] = {
//         from: obj2[key],
//         to: obj1[key],
//       };
//     }
//   } else {
//     result[key] = {
//       from: obj2[key],
//       to: undefined,
//     };
//   }
// }
