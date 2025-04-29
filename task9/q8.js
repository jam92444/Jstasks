function countCharacters(str) {
  return [...str].reduce(
    (acc, char) => {
      /[a-zA-Z]/.test(char)
        ? acc.letters++
        : /\d/.test(char)
        ? acc.digits++
        : acc.special++;
      return acc;
    },
    { letters: 0, digits: 0, special: 0 }
  );
}
function validateUsername(username) {
  const res = countCharacters(username);
  if (!/^[a-zA-Z]/.test(username)) return "Username must start with a letter";
  if (username.length < 3) return "Username must contain minimum 3 characters.";
  if (res.digits < 1) return "Username must contain at least one digit.";
  if (res.special > 0)
    return "Username may not contain any special characters.";
  return "Valid username";
}

const response = validateUsername("1sdjka$12oie_dsakj");
console.log(response);

