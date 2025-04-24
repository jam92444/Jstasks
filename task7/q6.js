const value = 0;
const result =
  typeof value === "number"
    ? value === 0
      ? "Zero"
      : value > 0
      ? "Positive"  
      : "Negative"
    : "Not a number";
console.log(result);

// return Zero


