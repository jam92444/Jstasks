function firstAppearence(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let count = 0
    for (let j = 0; j < str.length; j++) {
        if(str[i] === str[j]){
            count++;
        }
    }
    if(count === 1){
        result = str[i];
        return result;
    }


  }
}
const res = firstAppearence("JamalJi");
console.log(res)