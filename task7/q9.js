function outer() {
  if (false) {
    function inner() {
      return "Hi";
    }
  }
  console.log(typeof inner);
}
outer();


// return undefined because of block scope;