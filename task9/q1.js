function flatObject(object, finalObject = {}, keyName = "") {
  for (key in object) {
    const objectName = keyName ? `${keyName}.${key}` : `${key}`; //name
    if (typeof object[key] === "object" && object[key] !== null) {
      flatObject(object[key], finalObject, objectName);
    } else {
      finalObject[`${objectName}`] = object[key]; //{name:john}
    }
  }
  return finalObject;
}

const object = {
  name: "John",
  address: { city: "New York", zip: { code: 10001 } },
};
const result = flatObject(object);
console.log(result)


// function flatten(object) {
//   const resultObj = {};

//   for (const key in object) {
//     if (typeof object[key] === "object") {
//       for (const key2 in object[key]) {
//         if (typeof object[key][key2] === "object") {
//           for (const key3 in object[key][key2]) {
//             resultObj[`${key}.${key2}.${key3}`] = object[key][key2][key3];
//           }
//         } else {
//           resultObj[`${key}.${key2}`] = object[key][key2];
//         }
//       }
//     } else {
//       resultObj[key] = object[key];
//     }
//   }
//   return resultObj
// }

// const flatObject = flatten(object);
// console.log(flatObject);
