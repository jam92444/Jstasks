function phone(number) {
  const num = String(number);
  const start = num.slice(0, 2);
  const end = num.slice(-2);
  let i = 2;
  let result = start;
  while (i < num.length - 3) {
    result += "*";
    i++;
  }
  result += end;
  return result;
}

console.log(phone(210000000023));
