hoisted();
var hoisted = () => {
  console.log("Hi!");
};
// return reference error because the function is called before it has been declared.Also it cannot be hoisted only normal function can be hoisted.