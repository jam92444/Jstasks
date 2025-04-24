function test() {
  console.log(a);
  var a = 2;
}
test();
// return undefined because the variable is not declared before it has been used.