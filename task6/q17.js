console.log(myVar);
var myVar = 10;
function showScope() {
  console.log(myVar);
  var myVar = 20;
}
showScope();


// return undefine for  both cuz we are using without intializing the variable value