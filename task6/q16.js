function testScope() {
  var x = 10;
  if (true) {
    var x = 20;
    let y = 30;
    const z = 40;
  }
  console.log(x); // return 20 because it's a global variable 
  console.log(typeof y); // return undefined cuz its defined inside the block scope and we try to access it in a global scope
  console.log(typeof z);// return undefined cuz its defined inside the block scope and we try to access it in a global scope
}
testScope();
