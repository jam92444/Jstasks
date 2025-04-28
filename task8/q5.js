function convertAccountNumber(numb) {
  const num = String(numb);
  if (!num.includes(".")) {
    return;
  }
  const spliting = num.split(".");
  const decimal_digit = spliting[1];
  if (decimal_digit.length > 1 && decimal_digit.length < 3) {
    var finalNum = num.replace(".", "");
    const AccountNumber = finalNum.padStart(10, "0");
    console.log(AccountNumber);
  }
}
convertAccountNumber(13.12);
