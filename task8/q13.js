function generatePassword(length) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomChar = chars[Math.floor(Math.random() * chars.length)];
    password += randomChar;
  }

  return password;
}

function countCharacters(str) {
  let letters = 0;
  let digits = 0;
  let special = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      letters++;
    } else if (char >= "0" && char <= "9") {
      digits++;
    } else {
      special++;
    }
  }

  console.log("Letters:", letters);
  console.log("Digits:", digits);
  console.log("Special Characters:", special);
}


let password = generatePassword(10);
console.log("Password:", password);
countCharacters(password);
