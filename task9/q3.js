let obj = { a: 1, b: 2, c: 3 };

const resultObj = {}
for(const key in obj){
    resultObj[obj[key]] = key;
}
console.log(resultObj)