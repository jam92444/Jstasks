// Armstrong
function armstrong(n) {
  const number = String(n);
  const numLength = number.length;
  let result = 0;
  let num2 = 0;
  for (let i = 0; i < numLength; i++) {
    for (let j = 0; j < numLength; j++) {
      num2 = parseInt(number[i]) ** numLength;
    }

    result += num2;
  }

  if (result == n) {
    return `${number} number is armstrong number`;
  } else {
    return `${number} number is not a armstrong number`;
  }
}

const arm = armstrong(1635);
console.log(arm);
