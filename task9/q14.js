function countChar(str) {
  const resultObj = {};
  const string = str.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (resultObj[char]) {
      resultObj[char]++;
    } else {
      resultObj[char] = 1;
    }
  }
  return resultObj;
}

function findDiff(obj1, obj2) {
  const result = {};

  for (const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (obj1[key] === obj2[key]) {
        result[key] = true;
      } else {
        result[key] = false;
      }
    } else {
      result[key] = false;
    }
  }

  return result;
}

function anagram(str1, str2) {
  const str01 = countChar(str1);
  const str02 = countChar(str2);

  const diff = findDiff(str01, str02);
  let count = 0;
  for (let key in diff) {
    if (diff[key] === false) {
      count++;
    }
  }
  if (count >= 1) {
    return "Not an Anagram";
  } else {
    return `${str1} and ${str2} is an Anagram.`;
  }
}

let res = anagram("boobalan", "oobbalan");
console.log(res);
