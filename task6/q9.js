function outer(x) {
    // x=5
  return function inner(y) {
    return x + y;
  };
}
const addFive = outer(5);
// return the function that is inner()
// addFive = inner();
console.log(addFive(10));
// when we call addFive the inner() will be called 
// console.log(addFive(10)); that why we recieve the value 15
