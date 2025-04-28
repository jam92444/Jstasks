function isValidPassword(password) {
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return pattern.test(password);
}
function passwordValidation(password) {
  const strong = isValidPassword(password);
  if (strong) {
    return "Valid Password";
  } else {
    return "Choose a strong password";
  }
}
const res = passwordValidation("jAmal12")
console.log(res)