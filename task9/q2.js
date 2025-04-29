const keys = ["name", "age"];
const values = ["John", 30];

const resultObj = keys.map((key,idx) => ({[key]: values[idx]}))
// for (let i = 0; i < keys.length; i++) {
//   resultObj[keys[i]] = values[i];
// }


console.log(resultObj);
