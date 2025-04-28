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

  return {
    letters,
    digits,
    special,
  };
}

function validateUsername(username) {
  const res = countCharacters(username);
  const validName = username[0] - 0;

  const letters = res["letters"];
  const digits = res["digits"];
  const special = res["special"];

  if (typeof validName == "string") {
    if (letters < 4) {
      return "Username must contain minimum 3 character.";
    } else if (digits < 1) {
      return "Username must contain atleast one Digit.";
    } else if (special < 1) {
      return "username may not contain any special chracter";
    } else {
      return "Valid username";
    }
  } else {
    return "Username must start's with character";
  }
}
const response = validateUsername("1sdjka$12oie_dsakj");
console.log(response);

