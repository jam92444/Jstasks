function countChar(str) {
  const resultObj = {};
  const string = str.toLowerCase();

    for (let i = 0; i <string.length; i++) {
        const char = string[i];

        if(resultObj[char]){
            resultObj[char]++;
        }else{
            resultObj[char] = 1
        }   
    }
    console.log(resultObj)
}


countChar("Jamala");
